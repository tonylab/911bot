import settings from '../../server/imports/modules/settings'
import {locationToAddress} from '../../server/imports/modules/geocoding/geocoding'
/**
 * Case:
 * _id
 * senderId
 * location : {lat, lng}
 * phoneNumber
 * message
 * profile {firstName, lastName, profileImageUrl}
 */

export const Cases = new Mongo.Collection('cases');
export const CASE_TIMEOUT = 1000 * 60 * 30;

// Remove before launch
// Cases.remove({});

export function getCase(senderId) {
  const updatedAt = new Date(Date.now() - CASE_TIMEOUT);
  let foundCase = Cases.findOne({senderId, updatedAt: {$gte: updatedAt}},{sort: {updatedAt: -1}});
  if (foundCase) {
    return foundCase;
  } else {
    let url = `https://graph.facebook.com/v2.6/${senderId}?fields=first_name,last_name,profile_pic&access_token=${settings.FB_PAGE_TOKEN}`;
    
    try {
      var profileResponse = HTTP.get(url);
    } catch(e) {

    }

    let newCase = {senderId, step: 0, createdAt: new Date(), updatedAt: new Date()}
    newCase.profile = profileResponse.data || {};
    newCase._id = Cases.insert(newCase);
    return newCase;
  }
};

export function updateCase() {
  Cases.update.apply(Cases, arguments);
  Cases.update(arguments[0], {$set: {updatedAt: new Date()}});
}

export function generateCaseMessage(caseId) {
  let myCase = Cases.findOne(caseId);
  const name = getName(myCase);
  const phoneNumber = convertToPronouncableNumber(myCase.phoneNumber);

  let address;
  if (myCase.address) {
    address = myCase.address;
  } else {
    try {
      const addressResponse = locationToAddress(myCase.location)
      console.log('####we got an addressResponse',addressResponse);
      address = addressResponse.address.Match_addr;
    } catch(e) {
      address = "an unknown address.";
    }
  }

  const incidentName = myCase.step2Payload;
  let message = `${name} wants to report ${incidentName} at ${address}. I repeat the address is ${address}. The phone number for calling back is ${phoneNumber}.`
  updateCase(caseId, {$set: {message: message}});
  return message;
}

function getName(myCase) {
  return (!myCase.profile.first_name && !myCase.profile.last_name) ? "Someone" : (myCase.profile.first_name || "" + myCase.profile.last_name || "")
}

function convertToPronouncableNumber(number) {
  return number.split('').join(' ');
}
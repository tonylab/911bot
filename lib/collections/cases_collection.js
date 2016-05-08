import settings from '../modules/settings'

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

export function getCase(senderId) {
  const updatedAt = new Date() - CASE_TIMEOUT;
  let foundCase = Cases.findOne({senderId, updatedAt: {$gte: updatedAt}});
  if (foundCase) {
    return foundCase;
  } else {
    let url = `https://graph.facebook.com/v2.6/${senderId}?fields=first_name,last_name,profile_pic&access_token=${settings.FB_PAGE_TOKEN}`;
    
    try {
      var profile = HTTP.get(url);
    } catch(e) {

    }

    let newCase = {senderId, step: 0, createdAt: new Date(), updatedAt: new Date()}
    newCase.profile = profile || {};
    newCase._id = Cases.insert(newCase);
    return newCase;
  }
};
export const Cases = new Mongo.Collection('cases');
export const CASE_TIMEOUT = 1000 * 60 * 30;

export function getCase(senderId) {
  const updatedAt = new Date() - CASE_TIMEOUT;
  let foundCase = Cases.findOne({senderId, updatedAt: {$gte: updatedAt}});
  if (foundCase) {
    return foundCase;
  } else {
    let caseId = Cases.insert({senderId, step: 0, createdAt: new Date(), updatedAt: new Date()});
    return Cases.findOne(caseId);
  }
};
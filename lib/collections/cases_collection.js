export const Cases = new Mongo.Collection('cases');
export const CASE_TIMEOUT = 1000 * 60 * 30;

export function getCase(userId) {
    const updatedAt = new Date() - CASE_TIMEOUT
    let foundCase = Cases.findOne({userId, updatedAt: {$gte: updatedAt}});
    if (foundCase) {
        return foundCase;
    } else {
        let caseId = Cases.insert({userId, step:0, createdAt: new Date(), updatedAt: new Date()});
        return Cases.findOne(caseId);
    }
}
Security.defineMethod("ifIsCurrentUser", {
  fetch: [],
  transform: null,
  deny(type, arg, userId, doc) {
    return !_.isEqual(userId, doc.userId);
  }
});

Security.defineMethod("isQuestionUser", {
  fetch: [],
  transform: null,
  deny(type, arg, userId, doc) {

    // is authenticated use is not answerUserId then deny!
    if (!_.isEqual(doc.answerUserId, userId)) {
      return true;
    }

    // userId isQuestionUser then deny!
    return _.isEqual(doc.isQuestionUserId, userId);
  }
});

// Notifications COLLECTION Security!
Notifications.permit('insert').ifLoggedIn().apply();
Notifications.permit(['update', 'remove']).ifLoggedIn().ifIsCurrentUser().apply();

// Questions COLLECTION Security!
Questions.permit('insert').ifLoggedIn().apply();
Questions.permit(['update', 'remove']).ifLoggedIn().isQuestionUser().apply();

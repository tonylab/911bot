exports.challengeToken =  function (req, res) {
  console.log(req.query);
  if (req.query['hub.verify_token'] === 'this_is_my_token_24') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
  // soccerApi.updateAllSupportedTeamsStandings();
  // soccerApi.updateSupportedTeams();
  // soccerApi.updateSupportedLeaguesTopScorrers();
  // soccerApi.fetchFutureMatchesForSupportedLeague();
  // sendApi.sendTodayMatches('946904325365259');
};
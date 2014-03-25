'use strict';

/* Services */

smgContainer.factory('PlayerService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/players/:playerId',
		{playerId: '@playerId'}//,
		//{register: {method:'POST', params:{}, headers:{'Content-Type': 'application/json'},  isArray:false}}
		);
}]);

smgContainer.factory('GetGameInfoService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/games/:gameId',
			{gameId: '@gameId'}
	);
}]);

smgContainer.factory('InsertMatchService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/newMatch',
			{}
	);
}]);

smgContainer.factory('MatchService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/matches/:matchId',
			{matchId: '@matchId'}
	);
}]);

smgContainer.factory('DevService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/matches/developers/:developerId',
			{developerId: '@developerId'}
	);
}]);

smgContainer.factory('UploadGameService', ['$resource', function($resource) {
	return $resource('http://smg-server.appspot.com/matches/games',
			{}
	);
}]);

smgContainer.factory('TestService', ['$resource', function($resource) {
	return $resource('https://www.googleapis.com/urlshortener/v1/url',
			{}
	);
}]);
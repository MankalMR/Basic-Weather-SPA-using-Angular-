// router
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/forecast/:days?', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController',
        resolve: {
            daysInt: function ($q, $route) {
                var deferred = $q.defer(),
                    days = $route.current.params.days,
                    daysInt = parseInt(days ? days: '2');

                deferred.resolve(daysInt);

                return deferred.promise;
            }
        }
    })
});
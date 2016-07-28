// controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$log', '$resource', '$routeParams', 'daysInt', function($scope, cityService, $log, $resource, $routeParams, daysInt) {
    $scope.city = cityService.city;
    $scope.days = daysInt;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=22020dc3f987b279bc99b8980e966461', 
                                  { callback: "JSON_CALLBACK"}, 
                                  { get: { method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
}]);
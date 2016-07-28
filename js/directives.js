// custom directives
weatherApp.directive('weatherTemplate', function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/weatherTemplate.htm',
        replace: true,
        scope: {
            //@ - textbinding, = - objectbinding, & - functionbinding
            dayObject: '=', 
            convertDate: '&',
            convertTemp: '&'
        }
    }
});
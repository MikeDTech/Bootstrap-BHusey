// Create a module named weatherfilters
// The name for the filter is raining and different unicode
// characters are returned based on weather an item is true or false
angular.module('weatherFilters', []).filter('raining', function(){
    return function(input){
        return input ? '\u2602' : '\u2600';
    };
});


angular.module('myFilter', []).filter('raining', function(){
    return function(input){
        return input ? '\u2602' : '\u2600';
    };
});


//exam8.js--------------------

var app8 = angular.module('app8', ['weatherFilters'], ['myFilter']);
app8.controller('mainCtrl', function($scope) {
    
    $scope.weather = [
        {day: "Monday", rain: false},
        {day: "Tuesday", rain: true}
    ];

});

<!-- angulartut8.html
Custom Filter
Different unicode characters are returned based on if item.rain
has the value of true or false -->
<p>
<ul>
<li ng-repeat="item in weather">
    {{item.day + " : "}} {{item.rain | raining}}
</li>
</ul>
</p>
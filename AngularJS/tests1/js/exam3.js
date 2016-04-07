/*
 https://www.youtube.com/watch?v=OPxeCiy0RdY&list=PLGLfVvz_LVvRo7634CgU8vyD_NPtODwjE
 16:40 Starts Video!!!
 
 Directives allow you to extend HTML. There are many built in and you can make
 custom ones as well. Built in directives provide event handling, form
 validation, templates and more.
 */

// Define the AngularJS Module
var app3 = angular.module('app3', []);

// Define the Controller and implement the Scope
app3.controller('gListCtrl', function($scope) {

    $scope.groceries = [
        {item: "Tomatoes", purchased: false},
        {item: "Potatoes", purchased: false},
        {item: "Bread", purchased: false},
        {item: "Hummus", purchased: false}
    ];

    // Return a different HTML partial based on whether the
    // checkbox is checked or not
    $scope.getList = function(){
        return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
    };

});
var angular = require("angular");
var myApp = angular.module("myApp",["myApp.Users"]);

myApp.run(($rootScope) => {
    $rootScope.developerName = 'Rahul Barui';
    $rootScope.appName = 'Angular 1.4.x Test Project';
});

myApp.controller("mainController",($scope) => {
    $scope.titleText = 'Oh my God, Forgive me please. I am alone without you.';
    $scope.showMessage = function() {
        alert("hello world");
    };
});

require("./modules/userModule");

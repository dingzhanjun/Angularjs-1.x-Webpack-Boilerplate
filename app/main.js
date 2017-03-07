    /*@flow*/

    var angular = require('angular');
    var myApp = angular.module('myApp',['myApp.Users']);

    myApp.run(($rootScope:Object) => {
        $rootScope.developerName = 'Rahul Barui';
        $rootScope.appName = 'Angular 1.4.x Test Project';
    });

    myApp.controller('mainController',($scope:Object) => {
        $scope.titleText = 'Oh my God, Forgive me please. I am alone without you.';
        $scope.showMessage = function() {
            alert('hello world');
        };
        $scope.getName = function (name:string):string{
            return name;
        };
    });



    require('./modules/userModule');

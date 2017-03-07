//@flow

import userModule from './../userModule';

userModule.controller('usersController', ['$scope',function($scope:Object) {
    $scope.title = 'New AngularJS using Webpack and ES6';
    $scope.message = 'Hello world nw';
}]);

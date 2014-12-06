'use strict';

/**
 * @ngdoc function
 * @name intTmpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the intTmpApp
 */
angular.module('intTmpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

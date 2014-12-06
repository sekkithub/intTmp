'use strict';

/**
 * @ngdoc overview
 * @name intTmpApp
 * @description
 * # intTmpApp
 *
 * Main module of the application.
 */
angular
  .module('intTmpApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

var myApp = angular.module('ramenGallery', []);

var controllers = {};
controllers.galleryCtrl = function($scope) {
  $scope.galleries = [
    {name:'SHORYU', bg:''},
    {name:'BONE DADDIES', bg:''},
    {name:'MENYA SASUKE', bg:''},
    {name:'UNITED RAMEN', bg:''},
    {name:'KANADA-YA', bg:''},
    {name:'IPPUDO', bg:''},
    {name:'TONKOTSU', bg:''},
  ];
};

myApp.controller(controllers);


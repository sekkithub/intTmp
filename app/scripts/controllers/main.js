'use strict';

var myApp = angular.module('ramenGallery', []);

var controllers = {};

controllers.galleryCtrl = function($scope) {
  $scope.galleries = [
    {name:'SHORYU'},
    {name:'BONE DADDIES'},
    {name:'MENYA SASUKE'},
    {name:'UNITED RAMEN'},
    {name:'KANADA-YA'},
    {name:'IPPUDO'},
    {name:'TONKOTSU'}
  ];
};

controllers.scrollCtrl = function($scope) {
  $scope.scrollCounter = 'Good Morning!';
};

myApp.controller(controllers);

// Smooth Anchor Link
myApp.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target = $(idToScroll);
        $('body').animate({
          scrollTop: $target.offset().top
        }, 'slow');
      });
    }
  };
});
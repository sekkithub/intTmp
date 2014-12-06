'use strict';

$(function() {
  $(window).scroll(function() {
    var value = $(this).scrollTop();
    var intBg = value / 16;
    $('#scrollValue').text(value);
    $('.ramen').css('transform', 'rotate(' + intBg + 'deg)');
  });
});

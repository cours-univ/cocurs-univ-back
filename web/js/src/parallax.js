$(function () {
  var body = document.getElementsByTagName('body')[0];
  var $body = $(body);

  $body.css('background-position', '0px 0px');

  setInterval(function loop() {
    $body.css('background-position-x', '+=1.15');
    $body.css('background-position-y', '+=0.75');
  }, 1000/30);

  var lastScroll = $(this).scrollTop();
  $(window).scroll(function () {
    $body.css("background-position-y", "+=" + (-(($(this).scrollTop()-lastScroll) / 5)) + "px");
    lastScroll = $(this).scrollTop();
  });
});
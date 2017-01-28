//Use Strict Mode
(function($) {
  "use strict";

//Remove loading-wrapper class before window load
setTimeout(function(){
  $('.loading-wrapper').removeClass('loading-wrapper-hide');
  return false;
}, 10);


//======= Run on Window Load ============
$(window).load(function(){ 

  //Viewport
  var windowHeight = $(window).height();

  function adjustViewport() {
    $('.viewport').css('min-height', windowHeight);
    return false;
  }
  adjustViewport();

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');
  $('#page-loader').delay(400).fadeOut(400);


  //WAYPOINTS
  $('#main-carousel').waypoint(function(direction) {
      if (direction === 'down') {
        $('#header').addClass( 'header-stick');       
      }
      else {
        $('#header').removeClass( 'header-stick');
      }     
    },
    {
     offset: '-20px'
  });

  //Runs on window Resize
  $(window).resize(function() {
    windowHeight = $(window).height();
    adjustViewport();
    adjustProgressBar();
  });

});

//======= Run on Document Ready ============
$(document).ready(function(){

  //Submenus
  $('.hd-list-menu li ul').hide();
  $('.hd-list-menu li').on('mouseenter', function(e){
    $(this).find('> ul').fadeIn(200);
    return false;
  });
  $('.hd-list-menu li').on('mouseleave', function(e){
    $(this).find('> ul').fadeOut(200);
    return false;
  });

  //Anchor Smooth Scroll
   $('a[href*=#]:not([href=#])').on('click', function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

  //=====>  Countdown (Edit this with your own date)  <====
  $("#countdown").countdown("2017/11/22", function(event) {
    var $this = $(this).html(event.strftime(''
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %-D </span> <span class="countdown-type"> Days </span></div></div> '
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %H </span> <span class="countdown-type">Hours </span></div></div>'
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %M </span> <span class="countdown-type">Minutes </span></div></div>'
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %S </span> <span class="countdown-type">Seconds </span></div></div>'));
  });


  //Maps iframe Overlay
  var map = $('#map');
  map.on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
    return false;
  });

  map.on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
    return false;
  });

});

//End - Use Strict mode
})(jQuery);
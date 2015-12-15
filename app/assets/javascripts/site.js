// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('#datePicker1')
    .datepicker({
    format: 'mm/dd/yyyy'
  });
  $('#datePicker2')
    .datepicker({
    format: 'mm/dd/yyyy'
  });
  $('.btn-how-it-work').on('click',function(event){
    $('.how-work').toggleClass('hidden');
  });
  $('.how-it-works__close').on('click',function(event){
    $('.how-work').toggleClass('hidden');
  });
  $('.down-arrow').on('click',function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('.discovery-tiles').offset().top
      },800);
  });
  $('.dropdown-toggle').dropdown();

  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});

});

function validateForm() {
  var cityname = document.forms['home-search']['city'].value;
    if ( cityname === null || cityname === "") {
        alert("Name must be filled out");
        return false;
    }
}


  // //Smooth scroll
  //
  //   $('a[href*=#]:not([href=#])').click(function () {
  //     console.log("hi");
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });

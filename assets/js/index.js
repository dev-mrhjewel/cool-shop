

$(function() {
	"use strict";


// slider

$(document).ready(function(){
 $('.product-thumbs').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });


});






$(document).ready(function(){
  $('.cartegory-box').slick({
     dots: false,
     arrows: true,
     infinite: true,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           arrows: false,
         }
       }
     ]
   });
 
 
 });
  




});









$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
	centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider-nav',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })
});

$('.modal').on('shown.bs.modal', function (e) {
  $('.slider-for').slick('setPosition');
  $('.slider-nav').slick('setPosition');
  $('.wrap-modal-slider').addClass('open');
})






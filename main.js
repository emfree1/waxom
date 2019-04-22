$(document).ready(function(){
    $('.slider-in-header').slick({
    	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots:true
    });
});

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,
   
     fixedContentPos: false
    });
   });
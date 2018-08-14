$(document).ready(function(){
    $('.responsive').slick({
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false" style=""></button>',
     nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"></button>',
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true
         }
       },
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true
         }
       }
     ]
   });
});

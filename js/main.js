
$(document).ready(function () {

   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
      responsive: [

         {
            breakpoint: 500,
            settings: {

               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });
});


// slider
// $(document).ready(function () {

//    $('.slider').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       responsive: [
//          {
//             breakpoint: 600,
//             settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1
//             }
//          }
//       ]
//    });
// });

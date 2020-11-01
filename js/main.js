// slider slick
$(document).ready(function () {

   $('.slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         }
      ]
   });
});

// slider slick


// mobile navigation
let mobNavNumb = document.querySelector('.hamburger');
mobNavNumb.addEventListener('click', function () {
   const mobNavList = document.querySelector('.mobile__nav__list')

   if (mobNavList.style.top == '0vh') {
      mobNavList.style.top = '-100vh';
   } else {
      mobNavList.style.top = '0vh';
   }
}) // mobile navigation



//scroll header
document.addEventListener('scroll', () => {
   const header = document.querySelector('.header')
   let headerScroll = window.scrollY

   if (headerScroll >= 10) {
      header.style.height = '60px'
      header.style.background = '#4e5342'
   } else {
      header.style.height = '100px'
      header.style.background = '#4e534200'
   }
})//scroll header



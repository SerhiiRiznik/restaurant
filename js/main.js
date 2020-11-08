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
// let mobNavHumb = document.querySelector('.hamburger');
// const mobNavList = document.querySelector('.mobile__nav__list')

// mobNavHumb.addEventListener('click', function (e) {

//    mobNavList.classList.toggle('active')
//    document.body.style.overflow = 'hidden';

//    document.addEventListener('click', (e) => {

//       if (e.target != mobNavList) {
//          mobNavList.classList.remove('active')
//          document.body.style.overflow = null;
//       }




//    })
// })
// --------------------------------------------------------
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile__nav__list');
const menuItems = document.querySelectorAll('.mobile__nav__item');
const body = document.querySelector('body');



const toggleMenu = function () {
   menu.classList.toggle('open');
   btnMenu.classList.toggle('active')
   body.classList.toggle('block')
}

btnMenu.addEventListener('click', function (e) {
   e.stopPropagation();
   toggleMenu();
});

// for (let i = 0; i < menuItems.length; i++) {
//    let j = menuItems[i];


// }

menu.addEventListener('click', function (e) {

   if (e.target.nodeName !== 'A') {

      toggleMenu()

   }
});

// mobile navigation



//scroll header
document.addEventListener('scroll', () => {
   const header = document.querySelector('.header')
   const headerLogo = document.querySelector('.header__logo')
   let headerScroll = window.scrollY

   if (headerScroll >= 10) {
      header.style.height = '60px'
      header.style.background = '#4e5342'
      headerLogo.style.width = '60px'
   } else {
      header.style.height = '100px'
      header.style.background = '#4e534200'
      headerLogo.style.width = '100px'
   }
})//scroll header



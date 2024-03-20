var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });  



 
 ScrollReveal().reveal('.latest-top-page h1', { 
  delay: 800,
  origin: 'top',
  interval: 500,
  distance: '200px',
  duration: 800,
  easing: 'ease-in'
 }); 


 ScrollReveal().reveal('.latest-page .swipperss', { 
  delay: 1000,
  origin: 'left',
  interval: 500,
  distance: '300px',
  duration: 800,
  easing: 'ease-in'
 }); 

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


 
ScrollReveal().reveal('.trend_text h1', { 
  delay: 400,
  origin: 'top',
  interval: 500,
  distance: '50px',
  duration: 800,
  easing: 'ease-in'
 }); 

 
ScrollReveal().reveal('.trend_text p', { 
  delay: 500,
  origin: 'bottom',
  interval: 400,
  distance: '100px',
  duration: 600,
  easing: 'ease-in'
 }); 


ScrollReveal().reveal('.trend_text img', { 
  delay: 600,
  origin: 'right',
  interval: 400,
  distance: '300px',
  duration: 800,
  easing: 'ease-in'
 }); 

 
ScrollReveal().reveal('.trend_swiper .swiper', { 
  delay: 800,
  duration: 800,
  easing: 'ease-in'
 }); 


var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

ScrollReveal().reveal('.navbar-brand , .nav_icons', { 
  delay: 500,
  origin: 'top',
  distance: '80px',
  duration: 800,
  easing: 'ease-in'
 });  

 ScrollReveal().reveal('.head .head-text' ,{ 
  delay: 500,
  origin: 'bottom',
  distance: '100px',
  duration: 800,
  easing: 'ease-in'
 });  
 
 ScrollReveal().reveal('.trending .trend-img', { 
  delay: 500,
  origin: 'left',
  distance: '120px',
  duration: 800,
  easing: 'ease-in'
 }); 
 ScrollReveal().reveal('.trending .trend-text ', { 
  delay: 600,
  origin: 'right',
  distance: '120px',
  duration: 800,
  easing: 'ease-in'
 }); 

 ScrollReveal().reveal('.swipers .pagination ', { 
  delay: 1200,
  origin: 'right',
  duration: 800,
  distance: '150px',
  easing: 'ease-in'
 }); 

 ScrollReveal().reveal('.swipers #latest .card ', { 
  delay: 800,
  origin: 'left',
  interval: 500 ,
  duration: 800,
  easing: 'ease-in'
 }); 

 ScrollReveal().reveal('.footer .about', { 
  delay: 1000,
  origin: 'top',
  interval: 500 ,
  duration: 800,
  distance: '250px',
  easing: 'ease-in'
 }); 

 ScrollReveal().reveal(' .footer .contact', { 
  delay: 1000,
  origin: 'bottom',
  interval: 500 ,
  distance: '250px',
  duration: 800,
  easing: 'ease-in'
 }); 

 
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
    
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}
//slider

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true
  });


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      // when window width is >= 0px comma chai na birsine :<
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 991px
      1024: {
        slidesPerView: 3,
      }
    }
   
  });
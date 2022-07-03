
const navIcon = document.querySelector('.icon-nav'),
    nav = document.querySelector('.nav-list'),
    navItems = document.querySelectorAll('.nav-list a')


navIcon.onclick = function () {
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
} 
navItems.forEach(item => {
    item.onclick = () => {
        nav.classList.remove('active')
    }
})


//Swiper JS
  var swiper = new Swiper(".slide-container", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  
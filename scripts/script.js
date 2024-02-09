var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false, // Остановить автопрокрутку при взаимодействии пользователя
  //   },
});

var swiper = new Swiper(".mySwiper_testiomonials", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-testimonials",
    prevEl: ".swiper-button-prev-testimonials",
  },
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false, // Остановить автопрокрутку при взаимодействии пользователя
  //   },
});

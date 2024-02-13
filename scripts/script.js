// submenu

const buttonSubMebu = document.getElementById("buttonSubMebu");
const subMenu = document.getElementById("subMenu");
const iconSubMenu = document.getElementById("iconSubMenu");


buttonSubMebu.addEventListener("click", function () {
  subMenu.classList.toggle("header__xsubmenu-animation");
  buttonSubMebu.classList.toggle("active");
  iconSubMenu.classList.toggle("rotateSvg");

});

// about animations

const svgMan = document.querySelector(".svg_man"); // svg_man-animation

const svgCloudOne = document.querySelector(".svg_cloudOne"); //svg_cloudOne-animation
const svgCloudTwo = document.querySelector(".svg_cloudTwo"); //svg_cloudTwo-animation
const svgLargeCloud = document.querySelector(".svg_largeCloud"); //svg_largeCloud-animation

const svgLamp = document.querySelector(".svg_lamp"); // svg_lamp-animation

const ctaPhoneLeft = document.querySelector(".cta__phoneLeft"); // cta__phoneLeft-animation
const ctaPhoneRight = document.querySelector(".cta__phoneRight"); // cta__phoneRight-animation

const scribbleSponsors = document.getElementById("scribble-sponsors");
const scribbleBlackTestimonials = document.getElementById(
  "scribbleBlackTestimonials"
);
const scribbleAboutPath = document.getElementById("scribbleAboutPath");
const featuresPath = document.getElementById("svg_features-path");
const scribbleContentPath = document.getElementById("scribbleContentPath");
const pathBlog = document.getElementById("path_blog");

window.addEventListener("scroll", function () {
  const scrollY = this.window.scrollY;
  // console.log(scrollY);
  if (scrollY >= 1200) {
    svgMan.classList.add("svg_man-animation");

    svgCloudOne.classList.add("svg_cloudOne-animation");
    svgCloudTwo.classList.add("svg_cloudTwo-animation");
    svgLargeCloud.classList.add("svg_largeCloud-animation");

    svgLamp.classList.add("svg_lamp-animation");
  } else {
    svgMan.classList.remove("svg_man-animation");

    svgCloudOne.classList.remove("svg_cloudOne-animation");
    svgCloudTwo.classList.remove("svg_cloudTwo-animation");
    svgLargeCloud.classList.remove("svg_largeCloud-animation");

    svgLamp.classList.remove("svg_lamp-animation");
  }

  if (scrollY >= 8190) {
    ctaPhoneRight.classList.add("cta__phoneRight-animation");
  } else {
    ctaPhoneRight.classList.remove("cta__phoneRight-animation");
  }

  if (scrollY >= 8390) {
    ctaPhoneLeft.classList.add("cta__phoneLeft-animation");
  } else {
    ctaPhoneLeft.classList.remove("cta__phoneLeft-animation");
  }

  if (scrollY >= 700) {
    scribbleSponsors.classList.add("svg_scribbleRed-path-Animation");
  } else {
    scribbleSponsors.classList.remove("svg_scribbleRed-path-Animation");
  }

  if (scrollY >= 2900) {
    scribbleBlackTestimonials.classList.add(
      "svg_scribbleBlackTestimonials-path-animation"
    );
  } else {
    scribbleBlackTestimonials.classList.remove(
      "svg_scribbleBlackTestimonials-path-animation"
    );
  }

  if (scrollY >= 1960) {
    scribbleAboutPath.classList.add("svg_scribbleRed-path-Animation");
  } else {
    scribbleAboutPath.classList.remove("svg_scribbleRed-path-Animation");
  }

  if (scrollY >= 4120) {
    featuresPath.classList.add("svg_features-path-animation");
  } else {
    featuresPath.classList.remove("svg_features-path-animation");
  }

  if (scrollY >= 5545) {
    scribbleContentPath.classList.add("svg_scribble-content-animation");
  } else {
    scribbleContentPath.classList.remove("svg_scribble-content-animation");
  }

  if (scrollY >= 8050) {
    pathBlog.classList.add("path_blog-animation");
  } else {
    pathBlog.classList.remove("path_blog-animation");
  }
});

// submenu mobile

const subMenuButton = document.getElementById("subMenuButton");
const subMenuMobile = document.getElementById("subMenuMobile");
const iconSubMenuMobile = document.getElementById("iconSubMenuMobile");

subMenuButton.addEventListener("click", function () {
  subMenuMobile.classList.toggle("subItem_mobile-animation");
  iconSubMenuMobile.classList.toggle("rotateSvg");
});

// show/hide mobile menu

const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile__nav");
const burgerIcon = document.getElementById("burgerButton");

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("mobileNav-animation");
  overlay.classList.toggle("mobileNav-animation");
  document.body.classList.toggle('overflow')
});

// circle cursor

const circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.8;

// Start animation
const tick = () => {
  // MOVE
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
};

tick();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false, // Остановить автопрокрутку при взаимодействии пользователя
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".mySwiper_testiomonials", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-testimonials",
    prevEl: ".swiper-button-prev-testimonials",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false, // Остановить автопрокрутку при взаимодействии пользователя
//   },

// aos init

AOS.init();

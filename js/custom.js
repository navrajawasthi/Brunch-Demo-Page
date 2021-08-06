//menu toggle
$('.menu-toggle').on('click', function (e) {
  $('body').toggleClass("active-responsive-menu");
});


// // Slick Slider
$('.hero-slider-wrap').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  
});


//sticky
$(document).on("scroll", function () {
  if ($(document).scrollTop()) {
    $('.header-wrapper').addClass('active_sticky');
  }
  else {
    $('.header-wrapper').removeClass('active_sticky');
  }
})


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrapper').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > 0) {
    // Scroll Down
    $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

//back-to-top
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('.back-top-arrow').fadeIn();
    $(".back-top-arrow").css("opacity", "1");
    $(".back-top-arrow").css("visibility", "visible");
  } else {
    $('.back-top-arrow').fadeOut();
  }
});

//spinner loader

$(window).on('load', function () {
  $(".preloader-wrapper").css("opacity", "0");
  $(".preloader-wrapper").css("transition", "0.5s ease");
  $(".preloader-wrapper").css("z-index", "-1");
  // $("body").css("overflow", "auto");

  // gsap animation run after preloader 
// gsap.to(".banner-wrapper", {
//       yPercent: -100,
//       y: "100vh",
//       scrollTrigger: {
//         scrub: 1,
//         trigger: ".banner-wrapper",
//         start: "top top",
//         end: document.querySelector(".banner-wrapper").clientHeight,
//       }
//     })
gsap.to('.banner-layer', { y: '-100%', opacity: 0, stagger: 0.5, });
gsap.from('.banner-text', { scrollTrigger: '.banner-text', opacity: 0, y: "50px", duration: 1,delay:1, ease: "power1.out", stagger: 1 })
  // animation wow // after preloader wow.js will start
  new WOW().init();
});


//gsap animation

gsap.from('.powder-content', { scrollTrigger: '.powder-content', y: "100px", duration: 1, backgroundPosition: "200px 0", ease: "power1.out" })
gsap.from('.powder-image', { scrollTrigger: '.powder-image', x: "100px",duration: 1, ease: "power1.out" })
gsap.from('.we-serves', { scrollTrigger: '.we-serves', y: "100px", duration: 1, ease: "power2.out" })
gsap.from('.food-text', { scrollTrigger: '.food-text', opacity:0, y: "50px", duration: 1, ease: "power1.out", stagger: 1 })
gsap.from('.tab-pane', { scrollTrigger: '.tab-pane', duration: 2, y: "50px", ease: "power1.out" })
gsap.from('.food-menu-text', { scrollTrigger: '.food-menu-text', opacity:0, y: "50px", duration: 1, ease: "power1.out", stagger: 1 })
gsap.from('.tab-circle', { scrollTrigger: '.tab-circle', duration: 2, y: "50px", ease: "power1.out" })
gsap.from('.tab-button', { scrollTrigger: '.tab-button', duration: 2, y: "50px", ease: "power1.out" })
gsap.from('.menu-items', { scrollTrigger: '.menu-items', duration: 1, y: "20px", ease: "power1.out" })
gsap.from('.icon-content', { scrollTrigger: '.icon-content', duration: 1, y: "20px", ease: "power1.out" })
gsap.from('.reservation-wrapper h2', { scrollTrigger: '.reservation-wrapper h2', duration: 1, y: "30px", ease: "power1.out" })
gsap.from('.menu-grid-text', { scrollTrigger: '.menu-grid-text', opacity:0, y: "50px", duration: 1, ease: "power1.out", stagger: 1 })
gsap.from('.menu-detail', { scrollTrigger: '.menu-detail', duration: 1, y: "100px", ease: "power1.out" })


gsap.to('.cloud', {
  scrollTrigger: {
    scrub: 1,
  },
  x: "400px",
  duration: 1,
  ease: "power1.out"
})

 
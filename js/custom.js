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
  // animation wow // after preloader wow.js will start
  new WOW().init();
});


//gsap animation

gsap.from('.banner-content h1, span, a', {scrollTrigger:'.banner-content h1, span, a', duration: 1, opacity: 0, delay: 1.5, stragger: 1 })
gsap.from('.powder-content', { scrollTrigger: '.powder-content', y: "100px", ease: "power1.out"})




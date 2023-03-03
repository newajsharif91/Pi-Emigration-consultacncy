/* navigation bars start */
let menu = document.querySelector(".menu_bars");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};
/* navigation bars  end */

// document.addEventListener("scroll", () => {
//   console.log(document.querySelector(".hero").scrollHeight);
//   console.log(window.scrollY);
//   if (window.scrollY > document.querySelector(".hero").scrollHeight) {
//     document.querySelector("nav").classList.add("navbar-fixed");
//   } else {
//     document.querySelector("nav").classList.remove("navbar-fixed");
//   }
//   console.log(document.body.scrollTop);
// });

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa fa-times");
};

var swiper = new Swiper(".course-slider", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".techers-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*Advantage Section */
let i = 2;

$(document).ready(function () {
  var radius = 200;
  var fields = $(".itemDot");
  var container = $(".dotCircle");
  var width = container.width();
  radius = width / 2.5;

  var height = container.height();
  var angle = 0,
    step = (2 * Math.PI) / fields.length;
  fields.each(function () {
    var x = Math.round(
      width / 2 + radius * Math.cos(angle) - $(this).width() / 2
    );
    var y = Math.round(
      height / 2 + radius * Math.sin(angle) - $(this).height() / 2
    );
    if (window.console) {
      console.log($(this).text(), x, y);
    }

    $(this).css({
      left: x + "px",
      top: y + "px",
    });
    angle += step;
  });

  $(".itemDot").click(function () {
    var dataTab = $(this).data("tab");
    $(".itemDot").removeClass("active");
    $(this).addClass("active");
    $(".CirItem").removeClass("active");
    $(".CirItem" + dataTab).addClass("active");
    i = dataTab;

    $(".dotCircle").css({
      transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
      transition: "2s",
    });
    $(".itemDot").css({
      transform: "rotate(" + (i - 1) * 36 + "deg)",
      transition: "1s",
    });
  });

  setInterval(function () {
    var dataTab = $(".itemDot.active").data("tab");
    if (dataTab > 6 || i > 6) {
      dataTab = 1;
      i = 1;
    }
    $(".itemDot").removeClass("active");
    $('[data-tab="' + i + '"]').addClass("active");
    $(".CirItem").removeClass("active");
    $(".CirItem" + i).addClass("active");
    i++;

    $(".dotCircle").css({
      transform: "rotate(" + (360 - (i - 2) * 36) + "deg)",
      transition: "2s",
    });
    $(".itemDot").css({
      transform: "rotate(" + (i - 2) * 36 + "deg)",
      transition: "1s",
    });
  }, 5000);
});
/*advantage section end */

/*Review section */
$(function () {
  $('div[id*="biziqrecentreviews-"]')
    .css("visibility", "visible")
    .addClass("swiper-wrapper")
    .wrap('<div class="swiper-container"></div>');

  $(".biziq-review").addClass("swiper-slide");
});

$(function () {
  var time = 3000;
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 0, // this changes the width between the slides
    centeredSlides: true,
    loop: true,
    effect: "slide", // this sets animation type: "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
      delay: time,
      disableOnInteraction: false,
    },
  });
});

/* Review Section End */

/*--Customer Logo */
$(function () {
  var $first = $("#scroller>:first-child");
  $("#scroller").width($first.outerWidth(true));
  $first.clone(true).appendTo("#scroller");
  $("#scroller").addClass("ready");
});

/* customer logo end */

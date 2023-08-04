document.addEventListener("DOMContentLoaded", function () {
  const headerswiper = new Swiper(".swiper-header", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });

  const mockapSwiper = new Swiper(".mySwiper6", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
  });
});


// dom contentLoadede bu sayti zagruzkasi tugagandan keyin ishlidi 
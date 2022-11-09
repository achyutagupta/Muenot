!(function (o) {
  "use strict";
  o(document).ready(function () {
    function t() {
      o(window).width() > 992
        ? o(".navbar .dropdown")
            .on("mouseover", function () {
              o(".dropdown-toggle", this).trigger("click");
            })
            .on("mouseout", function () {
              o(".dropdown-toggle", this).trigger("click").blur();
            })
        : o(".navbar .dropdown").off("mouseover").off("mouseout");
    }
    t(), o(window).resize(t);
  }),
    o(window).scroll(function () {
      o(this).scrollTop() > 100
        ? o(".back-to-top").fadeIn("slow")
        : o(".back-to-top").fadeOut("slow");
    }),
    o(".back-to-top").click(function () {
      return (
        o("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1
      );
    }),
    o('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2e3 }),
    o(document).ready(function () {
      var t;
      o(".btn-play").click(function () {
        t = o(this).data("src");
      }),
        console.log(t),
        o("#videoModal").on("shown.bs.modal", function (n) {
          o("#video").attr(
            "src",
            t + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
          );
        }),
        o("#videoModal").on("hide.bs.modal", function (n) {
          o("#video").attr("src", '');
        });
    }),
    o(".testimonial-carousel").owlCarousel({
      center: !0,
      autoplay: !0,
      smartSpeed: 1500,
      margin: 30,
      dots: !0,
      loop: !0,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
      },
    });
})(jQuery);

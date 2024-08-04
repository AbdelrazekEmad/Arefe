const dir = $("html").attr("dir");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  rtl: dir == "rtl" ? true : false,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

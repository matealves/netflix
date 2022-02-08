$('.cartaz').slick({
  centerMode: true,
  centerPadding: '130px',
  slidesToShow: 8,
  prevArrow: $("#arrow-prev"),
  nextArrow: $("#arrow-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2,
        slidesToShow: 1
      }
    }
  ]
});

$('.cartaz2').slick({
  centerMode: true,
  centerPadding: '130px',
  slidesToShow: 8,
  prevArrow: $("#arrow-prev2"),
  nextArrow: $("#arrow-next2"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2,
        slidesToShow: 1
      }
    }
  ]
});
      
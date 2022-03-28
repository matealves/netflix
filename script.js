$('.cartaz').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 8,
  prevArrow: $("#arrow-prev"),
  nextArrow: $("#arrow-next"),
  responsive: [
    {
      breakpoint: 870,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 415,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToShow: 2
      }
    }
  ]
});

$('.cartaz2').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 8,
  prevArrow: $("#arrow-prev2"),
  nextArrow: $("#arrow-next2"),
  responsive: [
    {
      breakpoint: 870,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 5,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 415,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToShow: 2
      }
    }
  ]
});
      
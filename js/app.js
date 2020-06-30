function alert(elementParameter) {

}


$(window).ready(function () {


  //gallery

  $('#grid').masonry({
    itemSelector: '.gallery_img',
    columnMaxWidth: '.gallery_img',
    gutter: 5,
    percentPosition: true,
    fitWidth: true,

  });

  $('#grid').masonry({
    itemSelector: '.imgl',
    columnMaxWidth: '.imgl',
    gutter: 5,
    percentPosition: true,
    fitWidth: true,

  });

  //slider


  $(document).ready(function () {
    $('#slider').slick({

    });
  });

  $(document).ready(function () {
    $('#gallery-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });
  });

  //nav

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate({
      scrollTop: elementOffset
    }, 700);

  });

  //fixed

  let header = $('#header');
  let main = $('#main');
  let mainH = main.innerHeight();
  let scroll = $(window).scrollTop();

  $(window).on('scroll resize load', function () {
    let mainH = main.innerHeight();
    scroll = $(this).scrollTop();

    if (scroll > mainH) { header.addClass('header--fixed') }
    else { header.removeClass('header--fixed') };

    $('#nav').removeClass('burger--show');
  });

  //burger
  $('#burger').on('click', function () {
    $('#nav').toggleClass('burger--show');
  });

  //pop-up

  $('#btn-contact').on('click', function (event) {
    event.preventDefault();
    $('#header, #main').css('filter', 'blur(5px)');
    $('#pop-up').fadeIn();
  });

  $('#close').on('click', function () {
    $('#pop-up').fadeOut();
    $('#header, #main').css('filter', 'none');
  });

  $(document).mouseup(function (e) {
    let popup = $('.pop-up__card')
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('#pop-up').fadeOut();
      $('#header, #main').css('filter', 'none');
    }
  });

});
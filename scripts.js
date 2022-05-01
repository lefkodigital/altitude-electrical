$(document).ready(function(){ 

  $(".testimonial-slider-container").slick({
      autoplay: true,
      autoplaySpeed: 2e3,
      speed: 500,
      arrows: true,
      accessibility: true,
      dots: true,
      fade: false,
      infinite: false,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      }]
  });

  $('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

  $('.hamburger-link').click(function(){
    $('.mobile-menu').hide();
    $('.hamburger-button').toggleClass('active');
  });

});
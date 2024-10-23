// when document is fully loaded
   $(document).ready(function () {


    $('.library-slider').slick({
      dots: false,
      speed: 700,
      infinite: true,
      variableWidth: true,
      touchThreshold: 300,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
          }
        },
        {
          breakpoint: 479,
          settings: {
            
          }
        }
      ]
    });
    $('.testimonial-slider').slick({
      dots: false,
      speed: 700,
      infinite: true,
      variableWidth: true,
      touchThreshold: 300,
      prevArrow: $('.prev-testimonial'),
      nextArrow: $('.next-testimonial'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
          }
        },
        {
          breakpoint: 479,
          settings: {
            
          }
        }
      ]
    });
  });

    
    
    
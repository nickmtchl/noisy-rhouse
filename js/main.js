$(document).ready(function(){
	
  // Overlay Menu Functionality
	$("#overlay-menu").click(function() {
    $(".overlay").addClass("overlay-open");
    $('body').addClass("noScroll");
  });

	$(".overlay-close").click(function() {
    $(".overlay").removeClass("overlay-open");
    $('body').removeClass("noScroll");
  });

	// Slick Slider
	$('.nt-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    dots: true,
    cssEase: 'linear'
	});

  // site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	/* Slow Reveal -- Every time the window is scrolled, since we are also using the Reveal Footer, this might not actually be activated ... */
  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hideme').each( function(i){     
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
            
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){  
        $(this).animate({'opacity':'1'},700);
      }     
    }); 
  });

  // Reveal Footer
  $('footer').footerReveal({ shadow: false, zIndex: -101 });

}); // Close of jQuery
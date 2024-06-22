(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		
		
		/*magnificPopup active*/
		$(".menu-trigger").click(function(){
			$(".menu-trigger, .slideMenu").toggleClass("active");
		});
		


		$(document).ready(function() {
			// Toggle submenu display on clicking a menu item
			$('.slideMenu ul li').click(function(e) {
				e.stopPropagation(); // Prevent bubbling up to parent elements
				var $submenu = $(this).children('ul');
				$('.slideMenu ul ul').not($submenu).slideUp(); // Hide other submenus
				$submenu.slideToggle(); // Toggle the clicked submenu
			});

			// Hide submenu when clicking outside
			$(document).click(function() {
				$('.slideMenu ul ul').slideUp();
			});
		});
		
	});

	$(window).on('load', function(){
		//===== Prealoder
		$("#preloader").fadeOut("slow");
	  });
  

    jQuery(window).load(function(){


    });


	var wow = new WOW(
		{
		  boxClass:     'wow',      // animated element css class (default is wow)
		  animateClass: 'animated', // animation css class (default is animated)
		  offset:       0,          // distance to the element when triggering the animation (default is 0)
		  mobile:       true,       // trigger animations on mobile devices (default is true)
		  live:         true,       // act on asynchronously loaded content (default is true)
		  callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		  },
		  scrollContainer: null,    // optional scroll container selector, otherwise use window,
		  resetAnimation: true,     // reset animation on end (default is true)
		}
	  );
	  wow.init();


}(jQuery));	



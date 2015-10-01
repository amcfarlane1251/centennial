$(document).ready(function(){

	  // The slider being synced must be initialized first
	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    slideshow: false,
	    itemMargin: 5,
		itemWidth: 85,
	    initDelay:0,
	    asNavFor: '#slider',
	    prevText: '',
	    nextText: '',
	  });

	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: true,
	    slideshow: true,
	    slideshowSpeed:4000,
	    sync: "#carousel",
	    prevText: '',
	    nextText: '',
	    after: function(slider){ 
	        slider.pause(); 
	        slider.play(); 
		}
	  });

	  $('.variable-width').slick({
		  infinite: true,
		  autoplay:true,
		  focusOnSelect:true,
		  speed: 400,
		  slidesToShow: 1,
		  asNavFor: '.slider-nav',
		  centerMode: true,
		  variableWidth: true,
		  pauseOnHover: false
	  });

	  $('.slider-nav').slick({
		  slidesToShow: 9,
		  slidesToScroll: 1,
		  asNavFor: '.variable-width',
		  centerMode: true,
		  focusOnSelect: true
	  });

	  $('.event-heading a:first-child').click(function(e){
	  	var activeDiv = $('.content.active');
	  	var contentDiv = $(this).attr('href');

	  	activeDiv.fadeOut('slow', function(){
	  		activeDiv.removeClass('active');
	  		window.scrollTo(0,0);
	  		$(contentDiv).fadeIn('slow');
	  		$(contentDiv).addClass('active');
	  	});
	  });
});

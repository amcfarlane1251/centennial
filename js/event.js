$(document).ready(function(){

	  $('.event-heading a:nth-of-type(1)').click(function(e){
	  	var activeDiv = $('.content.active');
	  	var contentDiv = $(this).attr('href');

	  	activeDiv.fadeOut('slow', function(){
	  		activeDiv.removeClass('active');
	  		window.scrollTo(0,0);
	  		$(contentDiv).fadeIn('slow');
	  		$(contentDiv).addClass('active');
	  		if(contentDiv == '#airshow') {
	  				  // The slider being synced must be initialized first
			  $('#carousel').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
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
	  		}
	  	});
	});
});

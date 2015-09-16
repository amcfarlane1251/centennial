$(document).ready(function(){

	  // The slider being synced must be initialized first
	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemMargin: 5,
	    itemWidth: 100,
	    asNavFor: '#slider'
	  });

	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: true,
	    slideshow: false,
	    sync: "#carousel"
	  });

	  $('.event-heading a').click(function(e){
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
$(function() {
        var $container = $('.grid');

            $container.imagesLoaded(function(){
              $container.masonry({
                itemSelector: '.grid__item',
                isFitWidth: true,
                // columnWidth: 370,
                columnWidth: '.grid__item',
                gutter: 20,
                percentPosition: true,                
    		});
		});            
});



$(function() {

	var introH = $("#about").innerHeight(),
	header = $("#header"),
	scrollOffset = 0;


	$(window).on("scroll", function() {

		console.log(introH);

		scrollOffset = $(this).scrollTop();

		console.log(scrollOffset);

		if ( scrollOffset >= 100 ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});

});


jQuery(document).ready(function($){
        var $grid = $('.grid').masonry({
    	itemSelector: 'none', // select none at first
	columnWidth: '.grid-sizer',
	gutter: 0,
        percentPosition: true,
        horizontalOrder: true
	});

	var msnry = $grid.data('masonry');
        $grid.imagesLoaded($grid, function( instance ) {
	        $grid.masonry( 'option', { itemSelector: '.grid-item' });

	        var $items = $grid.find('.grid-item');
	        $grid.masonry('appended', $items);
		// This should not be necessary, but on document reload
		// the append call doesn't trigger layout
	        $grid.masonry('layout');
	        $grid.removeClass('are-images-unloaded');

                $(window).resize(function () {
                    msnry.layout();
                });
            });

        $grid.infiniteScroll({
            path: '.older-posts',
            append: '.grid-item',
            outlayer: msnry,
            status: '.page-load-status',
	    debug: true,
        });

	$grid.on( 'append.infiniteScroll', function( event, response, path, items ) {
	    // This should not be necessary, but is, no idea why
	    msnry.layout();
	});

});

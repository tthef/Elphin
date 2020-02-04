jQuery(document).ready(function($){
        var $grid = $('.grid').masonry({
    	itemSelector: 'none', // select none at first
	columnWidth: '.grid-sizer',
	gutter: 0,
        percentPosition: true,
        horizontalOrder: true
	});

	$grid.addClass('are-images-unloaded');

	var msnry = $grid.data('masonry');
        $grid.imagesLoaded($grid, function( instance ) {
	        $grid.masonry( 'option', { itemSelector: '.grid-item' });

	        var $items = $grid.find('.grid-item');
	        $grid.removeClass('are-images-unloaded');
	        $grid.masonry('appended', $items);
		// This should not be necessary, but on document reload
		// the append call doesn't trigger layout
	        $grid.masonry('layout');

                $(window).resize(function () {
                    msnry.layout();
                });
            });

        /* due to a bug in infinite scroll, if the page doesn't have the
	   path selector, i.e., there is only enough content for one page,
	   IS errors, and we end up with the status animation going at the
	   bottom of the page. So, we check ourselves, and if there is only
	   one page, give it a function that returns non-existent url (the
	   function must return something that doesn't evaluate to false,
	   otherwise same thing happens.

           It would make sense not to init IS in this case, but that breaks
	   the grid.
	 */
        var path;	
        var $older = $('.pagination').find('.older-posts');
	if ($older[0]) {
	    path = '.older-posts';
	} else {
	    path = function () { return 'no-more-pages'; };
	}
	
        $grid.infiniteScroll({
            path: path,
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

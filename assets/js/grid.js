function grid() {
    $(document).ready(function() {
        var grid = document.querySelector('.grid');

        if (grid) {
            imagesLoaded(grid, function( instance ) {
                var msnry = new Masonry(grid, {
                    itemSelector: '.grid-item',
	            columnWidth: '.grid-sizer',
	            gutter: 0,
                    percentPosition: true,
                    horizontalOrder: true
                });

                $(window).resize(function () {
                    console.warn('resize');
                    msnry.layout();
                });
            });


        }
   });
}

grid ();

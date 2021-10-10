
$(window).load(function () {
    $('.grid').isotope({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        percentPosition: true,
        resizesContainer: true,
        resizable: true,
        masonry: {
        columnWidth: '.grid-sizer'
        }
    });
    // filter items on button click
    $('.btn-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    });
});

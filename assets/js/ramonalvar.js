
$(window).load(function () {
    // ISOTOPE: Masonry layout, filtering and sorting
    $('.grid').isotope({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        percentPosition: true,
        resizesContainer: true,
        resizable: true,
        masonry: {
        columnWidth: '.grid-sizer'
        }
    });
    // ISOTOPE FILTERS: filter items on button click
    var $filters = $('.btn-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        // set filter in hash
        location.hash = 'filter=' + encodeURIComponent( filterValue );
    });
    var isIsotopeInit = false;
    
    // ISOTOPE FILTER URL HASHTAG: filter items on button click

    function getHashFilter() {
        var hash = location.hash;
        // get filter=filterName
        var matches = location.hash.match( /filter=([^&]+)/i );
        var hashFilter = matches && matches[1];
        return hashFilter && decodeURIComponent( hashFilter );
    }

    function onHashchange() {
      var hashFilter = getHashFilter();
      if ( !hashFilter && isIsotopeInit ) {
        return;
      }
      isIsotopeInit = true;
      // filter isotope
      $('.grid').isotope({filter: hashFilter});
      // set selected class on button
      if ( hashFilter ) {
        $filters.find('.is-checked').removeClass('is-checked');
        $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
      }
    }
    
    $(window).on( 'hashchange', onHashchange );
    // trigger event handler to init Isotope
    onHashchange();
});

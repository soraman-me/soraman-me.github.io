$(document).ready(function () {
    
    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        if ( $e.target.is('.is-checked') ) {
            // uncheck
            filterValue = '*';
          } else {
            filterValue = $this.attr('data-filter');
            $filters.find('.is-checked').removeClass('is-checked');
          }
          $this.toggleClass('is-checked');

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });



    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    //magnific-popup
    

});
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



    let nav_offset_top = $('.header_area').height() + 50;

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});
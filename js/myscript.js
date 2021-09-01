/*=============================================================
              Preloader
=============================================================*/
$(window).on('load', function () {
    $('#preloader_status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*=============================================================
              Owl Carousel
=============================================================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });
});
/*=============================================================
              Progress Bars
=============================================================*/
$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


});
/*=============================================================
            Responsive-Tabs  
=============================================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
/*=============================================================
            Isotope-Portfolio  
=============================================================*/
$(window).on('load', function () {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        /*Adding Active Class*/
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*=============================================================
            Magnific Popup
=============================================================*/
$(function () {
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*=============================================================
              Testimonial-Owl Carousel
=============================================================*/
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });
});

/*=============================================================
              Counter
=============================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});
/*=============================================================
              Clients-Owl Carousel
=============================================================*/
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });
});

/*=============================================================
             Navigation
=============================================================*/

$(function () {
    showHideWhiteNav();
    $(window).scroll(function () {
        showHideWhiteNav()
    });

    function showHideWhiteNav() {
        if ($(window).scrollTop() > 50) {
            //Show White Navigation bar
            $("nav").addClass("white-nav-top")
            //Show Dark Logo
            $(".navbar-brand img").attr("src", "images/logos/l1.png");
            //Show Back to Top Button
            $("#back-to-top").fadeIn('fast');
        } else {
            //Hide White Navigation bar
            $("nav").removeClass("white-nav-top")
            //Show normal Logo
            $(".navbar-brand img").attr("src", "images/logos/l2.png");
            //Hide Back to Top Button
            $("#back-to-top").fadeOut('fast');
        }
    }
});
/*Smooth Scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");


        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 65
        }, 1000, "easeInOutQuint");

    });

});
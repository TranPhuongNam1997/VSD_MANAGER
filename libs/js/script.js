$( document ).ready(function() {

    //nut scroll top

    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=300) {
            $('#back-to-top').show();
        }
        else {
            $('#back-to-top').hide();
        }
    });
});
$(function() {

    // slider js
    $(".slider-news").owlCarousel({
        items: 1,
        responsive: {
            1200: { item: 3, },// breakpoint from 1200 up
            982: { items: 3, },
            768: { items: 2, },
            480: { items: 1, },
            0: { items: 1, }
        },
        rewind: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500, //slide speed smooth

        dots: true,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: ['', ''],
        // navSpeed: 250, //slide speed when click button

        autoWidth: false,
        margin: 11,

        lazyContent: false,
        lazyLoad: false,

        animateIn: false,
        animateOut: false,

        center: false,
        URLhashListener: false,

        video: false,
        videoHeight: false,
        videoWidth: false,
    });

    //datetimepicker
    // $('input[name="daterange"]').daterangepicker({
    //     opens: 'left'
    // }, function(start, end, label) {
    //     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    // });
});


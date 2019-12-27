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

    //script sidebar

    $(".menucate-lv2").hide();
    $(".rotate-down .menucate-lv2").show();
    $(".menucate-lv1 > li > a").click(function(){
        $(".menucate-lv1 > li.hasdrop-cate").removeClass('rotate-down');

        $(".menucate-lv2").slideUp();
        if(!$(this).next(".menucate-lv2").is(":visible"))
        {
            $(this).next(".menucate-lv2").slideDown();
            $(this).parent().addClass('rotate-down');
        }
    });

    // custom datepicker

    jQuery('.datepicker-vsd').datetimepicker({
        timepicker:false,
        format: 'd/m/Y'
    });
    jQuery('.datetimepicker-vsd').datetimepicker({
        format: 'd/m/Y H:m'
    });
    $.datetimepicker.setLocale('vi');

    //checkvalidate
    $(".form-check-validate").validate(
        {
            rules:
                {
                    tentcph:
                        {
                            required: true
                        },
                    tentienganh:
                        {
                            required: true
                        },
                    noicap:
                        {
                            required: true
                        }
                },
            messages:
                {
                    tentcph:
                        {
                            required: "Vui lòng nhập Tên TCPH"
                        },
                    tentienganh:
                        {
                            required: "Vui lòng nhập Tên tiếng anh"
                        },
                    noicap:
                        {
                            required: "Vui lsfsdafsd"
                        }

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


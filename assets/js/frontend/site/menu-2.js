$(function() {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');


    // Nav toggle
    navToggle.on('click', function(e) {
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });
    $('.close').click(function() {
        navContainer.removeClass('is-visible');
    })

    // Nav dropdown toggle
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });

    $('.dropdown').click(function(e) {
        var thiss = $(this);
        //$(e).preventDefault();
        thiss.toggleClass('is-active');
    });
    //--------------------------------------------------------------------sticky-header
    var stickyPos = $('.sticky-header').offset().top;
    $('.qweqwe').click(function(){
        $('.dropdown-content').toggleClass('visible')
    })
    $(window).scroll(function() {
        if (window.innerWidth > 992) {
            if ($(window).scrollTop() >= stickyPos) {
                // console.log(stickyPos);
                $('.sticky-header').addClass('fixed');
                $('.after-fixed').css('padding-top', $('.fixed').height());
                /*search-drop---------------------------------------------------------------------------------*/
                $('.search-drop').css('display','inline-block')
                /*search-drop---------------------------------------------------------------------------------*/
            } else {
                $('.sticky-header').removeClass('fixed');
                $('.after-fixed').css('padding-top', '0px');
                /*search-drop---------------------------------------------------------------------------------*/
                $('.search-drop').css('display','none')
                /*search-drop---------------------------------------------------------------------------------*/
            }
        } else {
            $('.sticky-header').removeClass('fixed');
            $('.after-fixed').css('padding-top', '0px');
            /*search-drop---------------------------------------------------------------------------------*/
                $('.search-drop').css('display','none')
                /*search-drop---------------------------------------------------------------------------------*/
        }
    });

    if (window.innerWidth > 320) {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('.sticky-header').addClass('clearfix');
            } else {
                $('.sticky-header').removeClass('clearfix');
            }
        });
    }
})
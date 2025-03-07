/*
Template Name: Swiggiweb - Online Food Ordering Website Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});


(function ($) {

    "use strict"; // Start of use strict

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();


    $('.offer-slider').slick({
        //   centerMode: true,
        //   centerPadding: '30px',
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed:1000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });


    $('.cat-slider').slick({
        //   centerMode: true,
        //   centerPadding: '30px',
        slidesToShow: 8,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            }
        ]
    });

    // Trending slider

    $('.trending-slider').slick({
        //   centerMode: true,
        //   centerPadding: '30px',
        slidesToShow: 3,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // Most popular slider

    $('.popular-slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // magic Slider
    $('.magic-slider').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true
    });

    // magic-slider-map
    $('.magic-slider-map').slick({
        //   centerMode: true,
        //   centerPadding: '30px',
        autoplay: true,
        slidesToShow: 5,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }
        ]
    });


    // var $main_nav = $('#main-nav');
    // var $toggle = $('#toggle');

    // var defaultOptions = {
    //     disableAt: false,
    //     customToggle: $toggle,
    //     levelSpacing: 40,
    //     navTitle: 'Askbootstrap',
    //     levelTitles: true,
    //     levelTitleAsBack: true,
    //     pushContent: '#container',
    //     insertClose: 2
    // };

    // // call our plugin
    // var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

    $('#main-nav').hcOffcanvasNav({
        disableAt: 1024,
        customToggle: $('#toggle'),
        navTitle: 'All Categories',
        levelTitles: true,
        levelTitleAsBack: true
      });

})(jQuery); // End of use strict

$(document).ready(function () {

    $('.menu-carousel').slick({
        arrows: false,
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.news-carousel').slick({
        arrows: false,
        slidesToShow: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.review-carousel').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        adaptiveHeight: true
    });

    const body = $('.body');
    const menuBtn = $('.burger-button');

    menuBtn.on('click', function () {
        body.toggleClass('menu-open');
        $('.burger-item').toggleClass('open');
    });

    $('.scroll-link').on('click', function () {
        if (body.hasClass('menu-open')) {
            body.removeClass('menu-open');
        }
        if ($('.burger-item').hasClass('open')) {
            $('.burger-item').removeClass('open');
        }
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') {
            $('html').animate({
                scrollTop: $(dest).offset().top
            }, 500
            );
        }
        return false;
    });

    $('.btn').on('click', function () {
        if ($(this).attr('data-modal') == 'reserve') {
            body.addClass('open-modal modal-reserve');
        }
        else if ($(this).attr('data-modal') == 'review') {
            body.addClass('open-modal modal-review');
        }
        else if ($(this).attr('data-modal') == 'close') {
            if ($(this).hasClass('btn-agree')) {
                Cookies.set('agreed', 'true');
            }
            body.removeClass().addClass('body');
        }
    });

    const cookie = Cookies.get('agreed');

    if (!cookie) {
        body.addClass('open-modal modal-adult');
    }

    $(window).on("scroll", function () {
        1 <= $(this).scrollTop() ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled")
    })

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });
    }

})
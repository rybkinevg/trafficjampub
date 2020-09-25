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
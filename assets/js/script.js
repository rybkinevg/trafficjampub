$(document).ready(function () {

    $('.news-carousel').slick({
        arrows: false,
        slidesToShow: 4,
        dots: true
    });

    $('.menu-carousel').slick({
        arrows: false,
        slidesToShow: 3,
        dots: true
    });

    $('.review-carousel').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true
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
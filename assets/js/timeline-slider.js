$.js = function (el) {
    return $('[data-js=' + el + ']')
};


function carousel() {
    $('.timeline-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '[data-js="timeline-carousel"]',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    $.js('timeline-carousel').slick({
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1100,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        asNavFor: '.timeline-nav',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
}

carousel();
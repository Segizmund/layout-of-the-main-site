$(document).ready(function() {
    var block = $('.custom-select-nav');
    var burger = $(".nav-burger");
    var initialPosition = block.offset().top;
    console.log(initialPosition)
    $(window).scroll(function() {
        var currentPosition = $(window).scrollTop();
        console.log(currentPosition);
        if (currentPosition > initialPosition) {
            burger.fadeIn();
            $('.burger').removeClass('open');
            $('.hamburger-nav-box p').removeClass('open');
            $('.side-nav-page').removeClass('open');
        } else {
            burger.fadeOut();
        }
    });
    $('.burger').click(function() {
        $(this).toggleClass('open');
        $('.hamburger-nav-box p').toggleClass('open');
        $('.side-nav-page').toggleClass('open');
    })
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">'+'<a href="'+$(this).val()+'">' + $(this).html() + '</a></span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());

    var $originalOption = $(this);
    var href = $originalOption.find('a').attr('href');
    // Плавный скролл до якоря
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500);
});
});
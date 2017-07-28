
$(document).ready( function() {

    // скролл вниз header.............................................................................

    $('.header__button').click( function() {

        var offset = 0;

        $('html, body').animate ({
            scrollTop: $('#footer').offset().top - offset
        }, 1000);

        return false;
    });

    // слайдер main__content............................................................................

    // контейнер на всю ширину
    var width = $('.main__slider-container').width();

    // присваиваем данную ширину слайдам
    $('.main__slider-container__slides-items').width(width);

    // делаем возможность slider-container__slides вместить в себя все слайды в один ряд
    $('.main__slider-container__slides').width(width* $('.main__slider-container__slides-items').length);

    // смещаем все слайды влево через позиционирование (left)
    $('.main__slider-container__slides').css('left', -width);

    // выделяем последний слайд, и помещаем его в начало prependTo
    $('.main__slider-container__slides-items:last-child').prependTo('.main__slider-container__slides');


    // перемещаем слайды вперед
    function nextSlide() {
        // анимируем движение слайдов
        $('.main__slider-container__slides').stop().animate({
            'margin-left': -width
        }, 500, function() {
            $('.main__slider-container__slides-items:first-child').appendTo('.main__slider-container__slides');
            $('.main__slider-container__slides').css('margin-left', 0);
        })
    }

    // перемещаем слайды назад
    function prevSlide() {
        // анимируем движение слайдов
        $('.main__slider-container__slides').stop().animate({
            'margin-left': width
        }, 500, function() {
            $('.main__slider-container__slides-items:last-child').prependTo('.main__slider-container__slides');
            $('.main__slider-container__slides').css('margin-left', 0);
        })
    }

    // показываем кнопки
    $('.main__slider-container').hover(
      function () {
        $('.main__slider-container__button').stop().show(600);
      }, 
      function () {
        $('.main__slider-container__button').stop().hide(600);
      }
    );

    // кнопки
    $('.main__slider-container__button--next').click(nextSlide);
    $('.main__slider-container__button--prev').click(prevSlide);



    // кнопка показывает скрытые элементы main works.......................................................

    $('.main__work__hidden').hide();

    $('.main__work__form-button').click( function() {

        if ($('.main__work__hidden').is(':visible')) {
                $('.main__work__form-button').text('MORE');
                $('.main__work__hidden').slideUp();
        } else {
            $('.main__work__form-button').text('HIDE');
            $('.main__work__hidden').slideDown();
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const mainSlider = new Swiper('.main-slider__swiper', {
        loop: true,
        autoplay: true,

        pagination: {
            el: '.main-slider__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.main-slider__button-next',
            prevEl: '.main-slider__button-prev',
        },
    });

    const mainSliderBottom = new Swiper('.main-slider--bottom .main-slider__swiper', {
        loop: true,
        autoplay: true,

        pagination: {
            el: '.main-slider--bottom .main-slider__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.main-slider--bottom .main-slider__button-next',
            prevEl: '.main-slider--bottom .main-slider__button-prev',
        },
    });

    const actionSlider = new Swiper('.action-slider__swiper', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 15,

        pagination: {
            el: '.action-slider__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.action-slider__button-next',
            prevEl: '.action-slider__button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        }
    });

    const cardSlider1 = new Swiper('.catalog-slider--one .catalog-slider__swiper', {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.catalog-slider--one .catalog-slider__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.catalog-slider--one .catalog-slider__button-next',
            prevEl: '.catalog-slider--one .catalog-slider__button-prev',
        },

        breakpoints: {
            800: {
                slidesPerView: 3,
            },

            1200: {
                slidesPerView: 4,
            },
        }
    });

    const cardSlider2 = new Swiper('.catalog-slider--two .catalog-slider__swiper', {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.catalog-slider--two .catalog-slider__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.catalog-slider--two .catalog-slider__button-next',
            prevEl: '.catalog-slider--two .catalog-slider__button-prev',
        },

        breakpoints: {
            800: {
                slidesPerView: 3,
            },

            1200: {
                slidesPerView: 4,
            },
        }
    });
})
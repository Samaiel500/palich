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

    const cards = document.querySelectorAll('.card__swiper');

    if (cards.length > 0) {
        cards.forEach((card, index) => {
            const cardSwiperClass = `card__swiper-${index}`;
            const cardPaginationClass = `card__swiper-pagination-${index}`;

            card.closest('.card').querySelector('.card__swiper-pagination').classList.add(cardPaginationClass);
            card.classList.add(cardSwiperClass);

            new Swiper(document.querySelector(`.${cardSwiperClass}`), {
                loop: true,

                pagination: {
                    el: `.${cardPaginationClass}`,
                    clickable: true,
                },
            });
        })
    }

    $(".catalog-filter__changer").slider({
        min: 0,
        max: 5000,
        values: [0, 5000],
        range: true,
        animate: "fast",
        slide : function(event, ui) {
            $(".catalog-filter__input--left").val(ui.values[ 0 ]);
            $(".catalog-filter__input--right").val(ui.values[ 1 ]);
        }
    });
    // $(".catalog-filter__input--left").val($(".catalog-filter__changer").slider("values", 0));
    // $(".catalog-filter__input--right").val($(".catalog-filter__changer").slider("values", 1));
    $(".polzunok-container-5 input").change(function() {
        var input_left = $(".catalog-filter__input--left").val().replace(/[^0-9]/g, ''),
            opt_left = $(".catalog-filter__changer").slider("option", "min"),
            where_right = $(".catalog-filter__changer").slider("values", 1),
            input_right = $(".catalog-filter__input--right").val().replace(/[^0-9]/g, ''),
            opt_right = $(".catalog-filter__changer").slider("option", "max"),
            where_left = $(".catalog-filter__changer").slider("values", 0);
        if (input_left > where_right) {
            input_left = where_right;
        }
        if (input_left < opt_left) {
            input_left = opt_left;
        }
        if (input_left == "") {
            input_left = 0;
        }
        if (input_right < where_left) {
            input_right = where_left;
        }
        if (input_right > opt_right) {
            input_right = opt_right;
        }
        if (input_right == "") {
            input_right = 0;
        }
        $(".catalog-filter__input--left").val(input_left);
        $(".catalog-filter__input--right").val(input_right);
        if (input_left != where_left) {
            $(".catalog-filter__changer").slider("values", 0, input_left);
        }
        if (input_right != where_right) {
            $(".catalog-filter__changer").slider("values", 1, input_right);
        }
    });

    $( function() {
        $( "#accordion-filter" ).accordion({
            collapsible: true
        });
    } );

    $( function() {
        $( ".delivery__accordion-wrap" ).accordion({
            collapsible: true,
            heightStyle: "content",
            active: false
        });
    } );

    const switchFilter = document.querySelector('#switch-filter');
    const filterLeft = document.querySelector('#filter-left');
    const closeLeftFilter = document.querySelector('#close-left-filter');

    const switchSort = document.querySelector('#switch-sort');
    const catalogSort = document.querySelector('#catalog-sort');
    const closeSort = document.querySelector('#close-sort');

    if (switchFilter && filterLeft) {
        switchFilter.addEventListener('click', (e) => {
            e.preventDefault();
            filterLeft.classList.add('active');
        })

        closeLeftFilter.addEventListener('click', () => {
            filterLeft.classList.remove('active');
        })
    }

    if (switchSort && catalogSort) {
        switchSort.addEventListener('click', (e) => {
            e.preventDefault();
            catalogSort.classList.add('active');
        })

        closeSort.addEventListener('click', () => {
            catalogSort.classList.remove('active');
        })
    }

    const productNav = new Swiper(".products__swiper-nav", {
        spaceBetween: 10,
        slidesPerView: 3,
        direction: 'horizontal',
        updateOnWindowResize: true,

        breakpoints: {
            590: {
                direction: 'vertical',
            },
        }
    });

    const product = new Swiper(".products__swiper", {
        updateOnWindowResize: true,
        thumbs: {
            swiper: productNav,
        },
        navigation: {
            nextEl: ".products__swiper-button-next-nav",
            prevEl: ".products__swiper-button-prev-nav",
        },
    });

    //Счетчик продукатов для добавления в корзину
    const productMinus = document.querySelector('.products__info-count-minus');
    const productPlus = document.querySelector('.products__info-count-plus');
    const productInput = document.querySelector('.products__info-input');

    if (productMinus && productPlus && productInput) {
        const countPlus = () => {
            if (productInput.value >= 1) {
                productMinus.classList.remove('products__info-count-btn--disabled');
            }
            productInput.value = ++productInput.value;
        }

        const countMinus = () => {
            if (productInput.value === "1") {
                return;
            }
            if (productInput.value === "2") {
                productMinus.classList.add('products__info-count-btn--disabled');
            }
            productInput.value = --productInput.value;
        }

        productPlus.addEventListener('click', event => {
            countPlus();
        })

        productMinus.addEventListener('click', event => {
            countMinus();
        })
    }

    $(".shops-contacts").mCustomScrollbar();

    $('.tel').mask('+7 (000) 000-00-00');

    const btnFormAuth = document.querySelectorAll('.auth__btn');
    const telFormAuth = document.querySelector('#auth-tel');
    const errFormAuth = document.querySelector('.auth__form-error');

    telFormAuth.addEventListener('input', function () {
        console.log(this.value.length)
    })

    btnFormAuth.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (telFormAuth.value.length !== 17) {
                errFormAuth.classList.add('active');
                return;
            }
            errFormAuth.classList.remove('active');
        })
    })
})
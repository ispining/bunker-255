var mySwiper = new Swiper('.swiper-container-articles', {
    // Enable lazy loading
    navigation: {
        nextEl: '.blog-button-next',
        prevEl: '.blog-button-previously',
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        0: { /* when window >=0px - webflow mobile landscape/portriat */
            slidesPerView: 1,
            spaceBetween: 15,
        },
        767: { /* when window >= 767px - webflow tablet */
            slidesPerView: 2,
            spaceBetween: 32,
        },
        988: { /* when window >= 988px - webflow desktop */
            slidesPerView: 2.5,
            spaceBetween: 40,
        }
    },
})

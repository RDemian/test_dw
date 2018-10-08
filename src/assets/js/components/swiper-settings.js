import SwiperSlider2 from 'swiper';

const init = () => {

var swiper = new SwiperSlider2('.comments__swiper-container', {
    direction: "horizontal",
    breakpointsInverse: true,
    loop: !0,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.comments__swiper-button_next',
        prevEl: '.comments__swiper-button_prev',
    },
    pagination: {
        el: '.comments__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 320px
        1024: {
            loop: !0,
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});

};

export default {
    init,
};

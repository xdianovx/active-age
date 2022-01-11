import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation])
const reviews = () => {
    const rewiewsSlider = new Swiper('.reviews-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default reviews
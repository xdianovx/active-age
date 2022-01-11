import Swiper, {Pagination, Navigation, Scrollbar} from 'swiper'
Swiper.use([Pagination, Navigation,Scrollbar])
const timeline = () => {
    const swiper = new Swiper('.timeline-slider', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        // centeredSlides: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.timeline-r',
            prevEl: '.timeline-l',
        },
    });
}

export default timeline
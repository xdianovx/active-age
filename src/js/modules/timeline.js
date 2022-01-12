import Swiper, { Pagination, Navigation, Scrollbar } from 'swiper'
Swiper.use([Pagination, Navigation, Scrollbar])
const timeline = () => {
  const swiper = new Swiper('.timeline-slider', {
    // centeredSlides: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.timeline-r',
      prevEl: '.timeline-l',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      641: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1025: {
        slidesPerView: 'auto',
        spaceBetween: 80,
      },
    },
  })
}

export default timeline

import Swiper, { Navigation } from 'swiper'

const gallery = () => {
  const gallerySlider = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.gallery-r',
      prevEl: '.gallery-l',
    },
  })
}

export default gallery

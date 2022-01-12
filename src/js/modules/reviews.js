import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])

const reviews = () => {
  const rewiewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    navigation: {
      nextEl: '.reviews-r',
      prevEl: '.reviews-l',
    },
  })
}

export default reviews

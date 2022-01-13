const modal = () => {
  const modalTriggers = document.querySelectorAll('.popup-trigger')
  const modalCloseTrigger = document.querySelector('.popup-modal__close')
  const bodyBlackout = document.querySelector('.body-blackout')

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault()
      const { popupTrigger } = trigger.dataset
      const popupModal = document.querySelector(
        `[data-popup-modal="${popupTrigger}"]`
      )
      document.body.style.overflow = 'hidden'

      popupModal.classList.add('is--visible')
      bodyBlackout.classList.add('is-blacked-out')

      popupModal
        .querySelector('.popup-modal__close')
        .addEventListener('click', () => {
          popupModal.classList.remove('is--visible')
          bodyBlackout.classList.remove('is-blacked-out')
          document.body.style.overflow = ''
        })

      bodyBlackout.addEventListener('click', () => {
        // TODO: Turn into a function to close modal
        popupModal.classList.remove('is--visible')
        bodyBlackout.classList.remove('is-blacked-out')
        document.body.style.overflow = ''
      })
    })
  })
}

export default modal

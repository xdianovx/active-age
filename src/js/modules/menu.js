const menu = () => {
  const burgerBtn = document.querySelector('.burger')
  const overflow = document.querySelector('.overflow')
  const nav = document.querySelector('.header__nav')

  burgerBtn.addEventListener('click', () => {
    console.log(nav.querySelector('.header__li.header__li-sub > .sub-menu'))
    if (burgerBtn.classList.contains('active')) {
      overflow.classList.remove('active')
      nav.classList.remove('active')
      burgerBtn.classList.remove('active')
      nav
        .querySelector('.header__li.header__li-sub > .sub-menu')
        .classList.remove('active')

      document.body.style.overflow = ''
    } else {
      overflow.classList.add('active')
      nav.classList.add('active')
      burgerBtn.classList.add('active')
      //   document.body.style.overflow = 'hidden'
    }

    overflow.addEventListener('click', () => {
      nav.classList.remove('active')
      overflow.classList.remove('active')
      burgerBtn.classList.remove('active')
      nav
        .querySelector('.header__li.header__li-sub > .sub-menu')
        .classList.remove('active')

      document.body.style.overflow = ''
    })
  })

  nav.addEventListener('click', (e) => {
    const topLi = nav.querySelectorAll('.header__li')
    const target = e.target
    let subLi = target.querySelector('.sub-menu')

    if (target.className === 'header__li') {
      topLi.forEach((item) => {
        item.classList.remove('active')
        if (subLi) subLi.classList.remove('active')
      })

      target.classList.add('active')
    } else if (target.className === 'header__li header__li-sub') {
      console.log(234)
      subLi.classList.toggle('active')
    }
  })
}

export default menu

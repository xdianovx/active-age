const tabs = () => {
    const tabs = document.querySelector('.tabs')
    const tabsBtn = document.querySelectorAll('.tabs__btn')
    const tabsContent = document.querySelectorAll('.tabs__content')

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const {tabsPath} = e.target.dataset
                tabsBtn.forEach((el) => {
                    el.classList.remove('active')
                })
                document
                    .querySelector(`[data-tabs-path="${tabsPath}"]`)
                    .classList.add('active')
                tabsHandler(tabsPath)
            }
        })
    }

    const tabsHandler = (path) => {
        tabsContent.forEach((el) => {
            el.classList.remove('active')
        })
        document
            .querySelector(`[data-tabs-target="${path}"]`)
            .classList.add('active')
    }
}


export default tabs
let headerBottom = document.querySelector('.header2')

document.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 150) {
        headerBottom.classList.add('fixed')
    } else {
        headerBottom.classList.remove('fixed')
    }
})





let video = document.querySelector('.video')
let scrl = document.querySelectorAll('.scrl')

window.onscroll = () => {
    let y = window.scrollY
    if (y >= 0 && y < 166) {
        video.style.transform = 'scale(1)'
        video.style.marginTop = '0px'

    } else if (y >= 166 && y < 333) {
        video.style.transform = 'scale(0.85)'
        video.style.marginTop = '15%'
    } else if (y >= 333 && y < 500) {
        video.style.transform = 'scale(0.6)'

        video.style.marginTop = '21%'
    } else if (y >= 500) {
        video.style.transform = 'scale(0.5)'
        video.style.marginTop = '33%'
    }
    if (y >= 1137 && y <= 2629) {
        scrl[0].style.marginRight = `${y * 0.3}` + 'px'
        scrl[1].style.marginRight = `${y * 0.5}` + 'px'
        scrl[2].style.marginRight = `${y * 0.3}` + 'px'
    }
    console.log(Math.floor(y));
}
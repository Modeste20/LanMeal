



const headerBars = document.getElementById('bars')
const headerNav = document.getElementById('header-nav')
const bodyNavbar = document.querySelector('body.navbar-open')

headerBars.addEventListener('click',(e) => {
    if(!document.body.classList.contains('navbar-open')){
        e.stopPropagation()
        document.body.classList.add('navbar-open')
    }
})

headerNav.querySelector('.nav-close').addEventListener('click',() => {
    if(document.body.classList.contains('navbar-open')){
        document.body.classList.remove('navbar-open')
    }
})

headerNav.addEventListener('click',(e) => {
    if(document.body.classList.contains('navbar-open')){
        e.stopPropagation()
    }
})

document.body.addEventListener('click',() => {
    if(document.body.classList.contains('navbar-open')){
        document.body.classList.remove('navbar-open')
    }
})

// Disabled navbar-open class on body

window.addEventListener('resize',() => {
    if(window.innerWidth>1000){
        if(document.body.classList.contains('navbar-open')){
            document.body.classList.remove('navbar-open')
        }
    }
})

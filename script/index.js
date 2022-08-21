


const headerBars = document.getElementById('bars')
const headerNav = document.getElementById('header-nav')
const bodyNavbar = document.querySelector('.navbar-open')

headerBars.addEventListener('click',(e) => {
    e.stopPropagation()
    if(!document.body.classList.contains('navbar-open')){
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

/* Gestion des radiios des catégory de menus */

const categoryRadios = document.querySelectorAll('.menu .menu-container .menu-category .category-item input[type="radio"]')

for (const i of categoryRadios){
    i.addEventListener('change',(e) => {
        console.log(e.currentTarget.nextElementSibling)
        document.querySelector('.menu .menu-container .menu-category .category-item input + label.active').classList.remove('active')
        e.currentTarget.nextElementSibling.classList.add('active')
        document.querySelector('.menu .menu-container .menu-food .foods.is-active').classList.remove('is-active')
        const foods = document.querySelector('.menu .menu-container .menu-food .foods.food-'+e.currentTarget.value)
        const string = '.menu .menu-container .menu-food .foods.food-'+e.currentTarget.value
        console.log(foods)
        foods.classList.add('is-active')
    })
}
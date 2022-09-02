
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
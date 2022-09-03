

let counter = 0;
const bannerClasses = ['burgers','pates','tacos'];

const chevronLeft = document.querySelector('.banner .banner-container .chevron-left');
const chevronRight = document.querySelector('.banner .banner-container .chevron-right');

chevronLeft.addEventListener('click',(e) => {
    console.log('left')
    if(counter > 0 && counter<3){
        counter--;
    }else {
        if(counter === 0){
            counter = 2
        }
    }

    const parent = e.currentTarget.parentNode.parentNode.parentNode;
    if(parent){
        parent.className = "banner banner-caroussel banner-"+bannerClasses[counter];
    }
    console.log(parent)
})

chevronRight.addEventListener('click',(e) => {
    console.log('right')
    if(counter >= 0 && counter<2){
        counter++;
    }else {
        if(counter ===2){
            counter =0
        }
    }
    const parent = e.currentTarget.parentNode.parentNode.parentNode;
    if(parent){
        parent.className = "banner banner-caroussel banner-"+bannerClasses[counter];
    }
    console.log(parent)
})


/*
La validation de formulaire en javascript consiste à valider les champs des
formulaires los des événements (submit sur le form et input ou change 
sur les champs)

3types de validation client

-HTML avec l'ajout des attributs aux champs 

-HTML et javascript (personnalisation des messages d'erreurs comme ci-dessous)

-Javascript : Event (submit et input ou change)

*/


const fields = document.querySelectorAll('.contact-container .container .form form .field')


for(const field of fields){
    field.addEventListener('click',(e) =>{
        e.preventDefault();
        console.log(e.target.parentNode)
        if(e.target.parentNode.querySelector('label')){
            e.target.parentNode.querySelector('label').classList.add('active')
            if(e.target.parentNode.querySelector('input')){
                e.target.parentNode.querySelector('input').focus()
            }
        }
    })
    //Stop propagation for div.error in div.field

    const errorElmt = field.querySelector('.error');

    if(errorElmt){
        errorElmt.addEventListener('click',(e) => {
            e.stopPropagation()
        })
    }

}

/* Submit contact form */

const names = document.getElementById('name')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const objet = document.getElementById('objet')
const place = document.getElementById('place')
const message = document.getElementById('message')
const form = document.getElementsByTagName('form')[0]

/* Cette section concerne la validation côté client combinant 
la validation html et js de manière générale c'est à dire 
les messges d'ereurs ne sont pas pour différentes conditions

//Fonction pour la validation des champs

const validate = (fields,e) => {
    if(fields && Array.isArray(fields)){
        for(const field of fields){
            if(field){
                if(!field.validity.valid){
                    field.classList.add('invalid')
                    field.parentNode.querySelector('.error').classList.add('active')
                    e.preventDefault()
                } else{
                    field.classList.remove('invalid')
                    if(field.parentNode.querySelector('.error').classList.contains('active')){
                        field.parentNode.querySelector('.error').classList.remove('active')
                    }
                }
            }
        }
    } else{
        if(fields){
            if(!fields.validity.valid){
                fields.classList.add('invalid')
                fields.parentNode.querySelector('.error').classList.add('active')
                e.preventDefault()
            } else{
                fields.classList.remove('invalid')
                if(fields.parentNode.querySelector('.error').classList.contains('active')){
                    fields.parentNode.querySelector('.error').classList.remove('active')
                }
            }
        }
    }
}

//Lors de la soumission du formualaire

form.addEventListener('submit',(e) => {
    validate([names,email,tel,objet,place,message],e);
})

//Validate field when user change his value

const validateAfterInput = (fields) => {
    if(fields && Array.isArray(fields)){
        for(const field of fields){
            if(field){
                field.addEventListener('input',(e) => {
                    validate(field,e)
                })
            }
        }
    }
}

validateAfterInput([names,email,tel,message])

*/

/* Validation des champs par conditions 
*/

 //Email validation

 const emailValidation = () => {
    if(!email.validity.valid){
        email.classList.add('invalid'); 
        //Si la valeur du champ email est vide
        if(email.validity.valueMissing){
            email.parentNode.querySelector('div.error.active').textContent = 'Veuillez entrer votre email' 
        } else{
            //Si le type email n'est pas respecté
            if(email.validity.typeMismatch){
                email.parentNode.querySelector('div.error.active').textContent = 'Veuillez entrer un email valide' 
            }
        }
    } else{
        if(email.classList.contains('invalid')){
            email.classList.remove('invalid'); 
        }
        email.parentNode.querySelector('div.error.active').textContent = '' 
    }
 }

//Name validation 

const nameValidation = () => {
    if(!names.validity.valid){
        names.classList.add('invalid'); 
        //Si la valeur du champ name est vide
        if(names.validity.valueMissing){
            names.parentNode.querySelector('div.error.active').textContent = 'Veuillez entrer votre nom' 
        } else{
            //Si le nom contient moins de 4 caractères
            if(names.validity.patternMismatch){
                names.parentNode.querySelector('div.error.active').textContent = 'Votre nom doit commencer par une lettre' 
            } else{
                names.parentNode.querySelector('div.error.active').textContent = 'Votre nom doit comporter plus de 4 caractères' 
            }
        }
    } else{
        if(names.classList.contains('invalid')){
            names.classList.remove('invalid'); 
        }
        names.parentNode.querySelector('div.error.active').textContent = '' 
    }
}

//Telephone Validation

const telephoneValidation = () => {
    if(!tel.validity.valid){
        tel.classList.add('invalid'); 
        //Si la valeur du champ téléphone est vide
        if(tel.validity.valueMissing){
            tel.parentNode.querySelector('div.error.active').textContent = 'Veuillez entrer votre numero de téléphone'; 
        } else{
            //Si le numero ne corresponds pas au regexp fournis dans pattern dans le html
            if(tel.validity.patternMismatch){
                tel.parentNode.querySelector('div.error.active').textContent = 'Votre numero doit correspondre au format : +xxx xxxxx' 
            }
        }
    } else{
        if(tel.classList.contains('invalid')){
            tel.classList.remove('invalid'); 
        }
        tel.parentNode.querySelector('div.error.active').textContent = '' 
    }
}

//Objet, place, textarea validation

const validate = (field,message) => {

    if(!field.validity.valid){
        field.classList.add('invalid'); 
        //Si la valeur du champ est vide
        if(field.validity.valueMissing){
            field.parentNode.querySelector('div.error.active').textContent = message; 
        }
    } else{
        if(field.classList.contains('invalid')){
            field.classList.remove('invalid'); 
        }
        field.parentNode.querySelector('div.error.active').textContent = '' 
    }

}

//Submit form

form.addEventListener('submit',(e) => {
    
    e.preventDefault()

    //Email validation

    emailValidation()

    //Name Validation

    nameValidation()

    //Téléphone validation 

    telephoneValidation()

    //Objet validation 

    validate(objet,"Veuillez choisir l'objet de votre message")

    //Place validation 

    validate(place,'Veuillez choisir votre restaurant')

    //Message validation 

    validate(message,'Veuillez entrer votre message')

})

//input event : validation des champs lorsque l'utilisateur change la valeur des champs

const inputFieldEvent = (field,cb) => {
    field.addEventListener('input',() =>{
        console.log(field)
        return cb
    },true)
}

    //Name

    names.addEventListener('input',() => nameValidation())

    //Email

    email.addEventListener('input',() => emailValidation())

    //Tel

    tel.addEventListener('input',() => telephoneValidation())

    //Objet

    const objetValidation = () => validate(objet,"Veuillez choisir l'objet de votre message")

    objet.addEventListener('change',() => objetValidation() )

    //Place

    const placeValidation = () => validate(place,'Veuillez choisir votre restaurant')

    place.addEventListener('change',() => placeValidation() )

    //Message


    const messageValidation = () => validate(message,'Veuillez entrer votre message')

    message.addEventListener('input',() => messageValidation() )


/* Setting map configuration */

const map = L.map('map').setView([51.505, -0.09], 5);

const icon = L.icon({
    iconUrl:'./../images/contact/marker-icon.png'
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id:'map-attribution',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.5, -0.09],{
    icon:icon
}).addTo(map)
    .bindPopup('<h4>Sur Alger</h4><p> Voici la localisation de notre restaurant sur alger</p>')
    .openPopup();

    L.marker([52.5, -0.09],{
        icon:icon
    }).addTo(map)
        .bindPopup('<h4>Sur Paris</h4><p> Voici la localisation de notre restaurant sur alger</p>')
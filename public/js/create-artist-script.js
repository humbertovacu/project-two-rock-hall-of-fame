const newArtistForm = document.getElementById('new-artist-form');
let requiredInput = document.getElementById('error-fields');
let requiredFields = document.querySelectorAll('.required-field');

if(requiredInput){
 requiredFields.forEach(field => {
    field.removeAttribute('class');
    field.setAttribute('class', 'incomplete-field')
 })   
}





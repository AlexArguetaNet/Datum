
window.onload = () => {
    
    // Check for popup elements in the html
    try {

        popUpElements = document.getElementsByClassName("popup");
        for (let i = 0; i < popUpElements.length; i++) {
            popUpElements[i].style.display = "none";
        }

    } catch(e) {
        console.log('No popups on this page');
    }

} 


const showPopUp = (event) => {
    const popUpElem = document.querySelectorAll('.popup.' + event.target.classList[1])[0];
    if (popUpElem.style.display == "none") {
        popUpElem.style.display = "block";
    }
}

const closePopUp = (event) => {
    const popUpElem = document.querySelectorAll('.popup.' + event.target.classList[1])[0];
    if (event.target.classList.contains('popup')) {
        popUpElem.style.display = "none";
    }
}

const addColumnField = (event) => {

    // Prevents the button from submitting the form 
    event.preventDefault();
    
    var fieldInputs = document.getElementById('field-inputs');

    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'columns');
    newField.setAttribute('placeholder', 'New Column');
    
    fieldInputs.appendChild(newField);

}

const removeColumnField = (event) => {

    // Prevents the button from submitting the form
    event.preventDefault();

    var fieldInputs = document.getElementById('field-inputs');
    var inputTags = fieldInputs.getElementsByTagName('input');

    if (inputTags.length > 1) {
        fieldInputs.removeChild(inputTags[(inputTags.length - 1)]);
    }

}


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

    console.log(fieldInputs.childElementCount);

    if (fieldInputs.childElementCount < 6) {

        var newField = document.createElement('input');
        newField.setAttribute('type', 'text');
        newField.setAttribute('name', 'columns');
        newField.setAttribute('placeholder', 'New Column');
        newField.required = true;
        
        fieldInputs.appendChild(newField);

    }

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

const addNewEntry = (event) => {

    // Prevent button from submitting form
    event.preventDefault();

    // Get the form heading and the number of columns
    var formHeadingRow = document.getElementById('form-columns');
    var columnCount = formHeadingRow.childElementCount;

    // Get the table element
    var table = document.getElementById('form-table');

    // Create new table row
    var newRow = document.createElement('tr');
    
    // Create columns for the new row
    for (let i = 0; i < columnCount; i++) {

        var newColumn = document.createElement('td');
        newColumn.innerHTML += '<input type="text">';

        newRow.appendChild(newColumn);

    }

    
    table.appendChild(newRow);


}

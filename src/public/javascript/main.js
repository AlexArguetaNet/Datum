
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

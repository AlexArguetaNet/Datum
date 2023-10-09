
window.onload = () => {
    
    popUpElem = document.getElementsByClassName("popup")[0];
    popUpElem.style.display = "none";
} 


const showPopUp = (event) => {

    if (popUpElem.style.display == "none") {
        popUpElem.style.display = "block";
    } else {
        if (event.target.classList.contains('popup')) {
            popUpElem.style.display = "none";
        }
    }

}
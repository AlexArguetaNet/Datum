
window.onload = () => {
    
    htmlNode = document.getElementsByTagName("html")[0];
    htmlNode.id = "html";

    popUpElem = document.getElementsByClassName("popup")[0];
    popUpElem.style.display = "none";
} 


const showPopUp = (event) => {

    if (popUpElem.style.display == "none") {
        popUpElem.style.display = "block";
        popUpElem.style.backgroundColor = "rgba(0, 0, 0, .5)";
    } else {
        if (event.target.classList.contains('popup')) {
            popUpElem.style.display = "none";
            popUpElem.style.backgroundColor = "white"
        }
    }

}
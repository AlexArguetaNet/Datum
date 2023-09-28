
window.onload = () => {
    
    htmlNode = document.getElementsByTagName("html")[0];
    htmlNode.id = "html";

    // index.ejs
    signUpBlock = document.getElementById("sign-up-block");
    signUpBlock.style.display = "none";
} 

// index.ejs
const showSignUp = (event) => {

    if (signUpBlock.style.display == "none") {
        signUpBlock.style.display = "flex";
        htmlNode.style.backgroundColor = "rgba(81, 118, 100, .5)";
    } else {
        // Ensure that the sign up form only closes when
        // clicked outside the form
        if (event.target.id == "sign-up-block") {
            event.target.style.display = "none";
            htmlNode.style.backgroundColor = "white"
        }
    }

}
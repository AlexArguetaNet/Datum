
window.onload = () => {
    // index.ejs
    signUpBlock = document.getElementById("sign-up-block");
    signUpBlock.style.display = "none";
} 

// index.ejs
const showSignUp = () => {

    if (signUpBlock.style.display == "none") {
        signUpBlock.style.display = "flex";
    } else {
        signUpBlock.style.display = "none";
    }

}
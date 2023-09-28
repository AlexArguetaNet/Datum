
const showSignUp = () => {

    var signUpDiv = document.getElementById("sign-up-block");

    if (signUpDiv.style.display === "none") {
        signUpDiv.style.display = "flex";
    } else {
        signUpDiv.style.display = "none";
    }


}
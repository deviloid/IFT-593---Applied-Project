const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = signupForm.password.value;
    const confirmpassword = signupForm.confirm-password.value;

    if (password != confirmpassword) {
        signupErrorMsg.style.opacity = 1;
        // location.reload();
    } else {
        location.reload();
    }
})
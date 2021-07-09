const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const redirectButton = document.getElementById("redirect-button");

// getNewRandomColor();

// function getNewRandomColor()
// {
//     var myArray = ['#10679e', '#037387', '#039b82'];    
//     var rand = myArray[Math.floor(Math.random() * myArray.length)];
//     document.getElementById("body").style.backgroundColor = rand;
// }

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


redirectButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/signup";
})
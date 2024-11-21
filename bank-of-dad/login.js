let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", verifyLogin);

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function verifyLogin() {
    let emailValue = emailInput.value;
    let passwordValaue = passwordInput.value;
    if(emailValue === 'secret@gmail.com' && passwordValaue === 'secret') {
        alert('Dashboard');
        // redirect to dashboard
        window.location.replace("dashboard.html");
    } else {
        alert('You are not authorized to enter');
    }
}

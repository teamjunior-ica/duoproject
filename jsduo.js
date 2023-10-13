var signup = document.querySelector(".signup");
var login = document.querySelector(".login");
var slider = document.querySelector(".slider");
var boxbox = document.querySelector(".sandou9kbir");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	boxbox.classList.add("sandou9yet7arek");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	boxbox.classList.remove("sandou9yet7arek");
});



function signupp() {
    var enterName = document.querySelector("#idofsignupname").value;
    var enterEmail = document.querySelector("#idofsignupemail").value;
    var enterPassword = document.querySelector("#idofsignuppassword").value;
    var confirmPassword = document.querySelector("#idofsignupconfirmpassword").value;

    if (enterPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    localStorage.setItem('userName', enterName);
    localStorage.setItem('userEmail', enterEmail);
    localStorage.setItem('userPassword', enterPassword);

    alert('Signup Successful');
}

var buttonsign = document.getElementById("buttonsignup");
buttonsign.addEventListener("click", signupp);

function loginn() {
    var enterEmail = document.querySelector("#idofloginmail").value;
    var enterPassword = document.querySelector("#idofloginpass").value;

    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    if (enterEmail === storedEmail && enterPassword === storedPassword) {
		window.location.assign('facebook.com');
        alert('Login Successful');
    } else {
        alert('Invalid login details');
    }
}

var buttonlogin = document.getElementById("buttonlogin");
buttonlogin.addEventListener("click", loginn);







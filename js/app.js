const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(checkInput()){
        alert('The form was submitted');
    }
});

function checkInput() {
    if (validateName() &&  validateEmail() && validatePhone() && validatePass() &&validateConfirmPass() && validateCity()){
        return true;
    }else{
        return false;
    }
    
}
function validateName() {
    const username = document.getElementById("username");
    const usernameValue = username.value.trim();
    //For username validation
    if (usernameValue === '') {
        setError(username, "Username cannot be blank");
        return false;
    } else {
        setSuccess(username);
        return true;
    }
}
function validateEmail() {
    const email = document.getElementById("email");
    const emailValue = email.value.trim();

    //For Email validation
    if (emailValue === '') {
        setError(email, "Email cannot be blank");
        return false;
    } else if (!isEmail(emailValue)) {
        setError(email, "Email is not valid");
        return false;
    } else {
        setSuccess(email);
        return true;
    }
}
function validatePhone() {
    const phone = document.getElementById("phone");
    const phoneValue = phone.value.trim();
    //For Phone validation
    if (phoneValue === '') {
        setError(phone, "Phone cannot be blank");
        return false;
    } else if (phoneValue.length < 10 || phoneValue.length > 10) {
        setError(phone, "mobile number must be 10 digit");
        return false;
    } else if (!isPhone(phoneValue)) {
        setError(phone, "phone is not valid");
        return false;
    } else {
        setSuccess(phone);
        return true;
    }
}
function validatePass() {
    const password = document.getElementById("password");
    const passwordValue = password.value.trim();
    //For Password validation
    if (passwordValue === '') {
        setError(password, "Password cannot be blank");
        return false;
    } else if (!PasswordContainStr(passwordValue)) {
        setError(password, "password must contain at least one numeric value");
        return false;
    } else if (!PasswordContainLowerCharacter(passwordValue)) {
        setError(password, "password must contain at least one lower letter");
        return false;
    } else if (!PasswordContainUpperCharacter(passwordValue)) {
        setError(password, "password must contain at least one upper letter");
        return false;
    } else if (!PasswordContainSpecialLetter(passwordValue)) {
        setError(password, "password must contain at least one special letter");
        return false;
    } else if (!PasswordLength(passwordValue)) {
        setError(password, "password must be greater than 8 letter");
        return false;
    } else {
        setSuccess(password);
        return true;
    }
}
function validateConfirmPass() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    //For Confirm Password validation
    if (confirmPasswordValue === '') {
        setError(confirmPassword, "Password cannot be blank");
        return false;
    } else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, "passwords does not match");
        return false;
    } else {
        setSuccess(confirmPassword);
        return true;
    }
}
function validateCity() {
    const city = document.getElementById("city");
    const cityValue = city.value.trim();

    //For City validation
    if (cityValue === '') {
        setError(city, "city cannot be blank");
        return false;
    } else if (hasNumber(cityValue)) {
        setError(city, "city does not contain numeric letter");
        return false;
    } else {
        setSuccess(city);
        return true;
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(emailvalue) {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(emailvalue)) {
        return true;
    }
    return false;
}
function isPhone(phone) {
    var regex = /^[789][0-9]{9}$/;

    if (regex.test(phone)) {
        return true;
    } else {
        return false;
    }
}
function PasswordLength(password) {
    if (password.length < 8) {
        return false;
    } else {
        return true;
    }
}
function PasswordContainStr(password) {
    if (password.search(/[0-9]/) == -1) {
        return false;
    } else {
        return true;
    }
}
function PasswordContainLowerCharacter(password) {
    if (password.search(/[a-z]/) == -1) {
        return false;
    } else {
        return true;
    }
}
function PasswordContainUpperCharacter(password) {
    if (password.search(/[A-Z]/) == -1) {
        return false;
    } else {
        return true;
    }
}
function PasswordContainSpecialLetter(password) {
    if (password.search(/[!\@\#\$\%\^\&\(\)_\+\.\,\:\;]/) == -1) {
        return false;
    } else {
        return true;
    }
}
function hasNumber(myString) {
    var filter = /\d/;
    if (filter.test(myString)) {
        return true;
    }
    return false;
}
let firstName = document.getElementById("firstname-input");
let firstNameError = document.getElementById("firstname-error");
let firstNameEmpty = document.getElementById("firstname-empty");

let lastName = document.getElementById("lastname-input");
let lastNameError = document.getElementById("lastname-error");
let lastNameEmpty = document.getElementById("lastname-empty");

let email = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let emailEmpty = document.getElementById("email-empty");

let number = document.getElementById("number-input");
let numberError = document.getElementById("number-error");
let numberEmpty = document.getElementById("number-empty");

let password = document.getElementById("password-input");
let passwordError = document.getElementById("password-error");
let passwordEmpty = document.getElementById("password-empty");

let confirmPassword = document.getElementById("confirmpassword-input");
let confirmPasswordError = document.getElementById("confirmpassword-error");
let confirmPasswordEmpty = document.getElementById("confirmpassword-empty");

let submit = document.getElementById("submit");

let valid = document.getElementsByClassName("valid");
let invalid = document.getElementsByClassName("error");

const passwordVerify = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);

    //^[a-zA-Z0-9\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<]{8,}
};

const textVerify = (text) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(text);
};

const numberVerify = (number) => {
    const regex = /^[0-9]{11}$/;
    return regex.test(number);
};

const emailVerify = (email) => {
    const regex = /^[a-z0-9_.]+@[a-z]{3,}\.[a-z\.]{3,}$/;
    return regex.test(email);
};

const emptyUpdate = (
    inputReference,
    emptyErrorReference,
    otherErrorReference
) => {
    if(!inputReference.value) {
        emptyErrorReference.classList.remove("hide");
        otherErrorReference.classList.add("hide");
        inputReference.classList.add("error");
    } else {
        emptyErrorReference.classList.add("hide");
    }
};

const errorUpdate = (inputReference, errorReference) => {
    inputReference.classList.remove("valid");
    errorReference.classList.remove("hide");
    inputReference.classList.add("error");
};

const validInput = (inputReference) => {
    inputReference.classList.remove("error");
    inputReference.classList.add("valid");
};

firstName.addEventListener("input", () => {
    if(textVerify(firstName.value)) {
        firstNameError.classList.add("hide");
        validInput(firstName);
    } else {
        errorUpdate(firstName, firstNameError);
        emptyUpdate(firstName, firstNameEmpty, firstNameError);
    }
});

lastName.addEventListener("input", () => {
    if(textVerify(lastName.value)) {
        lastNameError.classList.add("hide");
        validInput(lastName);
    } else {
        errorUpdate(lastName, lastNameError);
        emptyUpdate(lastName, lastNameEmpty, lastNameError);
    }
});

number.addEventListener("input", () => {
    if(numberVerify(number.value)) {
        numberError.classList.add("hide");
        validInput(number);
    } else {
        errorUpdate(number, numberError);
        emptyUpdate(number, numberEmpty, numberError);
    }
});

email.addEventListener("input", () => {
    if(emailVerify(email.value)) {
        emailError.classList.add("hide");
        validInput(email);
    } else {
        errorUpdate(email, emailError);
        emptyUpdate(email, emailEmpty, emailError);
    }
});

password.addEventListener("input", () => {
    if(passwordVerify(password.value)) {
        passwordError.classList.add("hide");
        validInput(password);
    } else {
        errorUpdate(password, passwordError);
        emptyUpdate(password, passwordEmpty, passwordError);
    }
});

confirmPassword.addEventListener("input", () => {
    if(confirmPassword.value === password.value) {
        confirmPasswordError.classList.add("hide");
        validInput(confirmPassword);
    } else {
        errorUpdate(confirmPassword, confirmPasswordError);
        emptyUpdate(password, confirmPasswordEmpty, confirmPasswordError);
    }
});

submit.addEventListener("click", () => {
    if(valid.length == 6 && invalid.length == 0) {
        alert("Sucesso");
    } else {
        alert("Error");
    }
});
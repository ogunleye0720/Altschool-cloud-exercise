// VARIABLES //
let  errorText = document.querySelector("#error-text");
let errorIcon= document.querySelector(".error-icon");
let boxError= document.querySelector(".email-input");
const form = document.querySelector(".email-form");
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event Listener //
form.addEventListener("submit", (e) => {
    e.preventDefault();   // prevents the default action
    // validates the input value
    if (form.email.value.trim() === '' || !(emailPattern.test(form.email.value.trim()))){
        return [errorText.style.display = "block", errorIcon.style.display = "inline-block", boxError.style.border = "1px solid hsl(0, 93%, 68%)"];
    }
});
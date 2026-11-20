
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#charcount")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")

const LIMIT = 200

charCount.textContent = `${LIMIT} characters remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").
    textContent = ""
}

function validUsername(username) {
    // check 1
    if (username.value.trim().length === 0) {
        showError(username, "Please enter your name")
        return false
    }

    //check 2
    if (username.value.trim().length < 3) {
        showError(username, "Username must be atleast 3 characters")
        return false
    }

    clearError(username)
    return true
}

function validPassword(password) {
    // check 1
    if (password.value.trim().length === 0) {
        showError(password, "Please enter your password")
        return false
    }

    //check 2
    if (password.value.trim().length < 8) {
        showError(password, "Password must be atleast 8 characters")
        return false
    }

    clearError(password)
    return true
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = validUsername(username); // Passing username element

    const isPasswordValid = validPassword(password); // Passing password element

   if(isUsernameValid && isPasswordValid) {
    document.querySelector("h1").classList.remove("hidden")
   } else {
    document.querySelector("h1").classList.add("hidden")
   }

})

// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })

// username.addEventListener("input", (e) => {
//     console.log("input event", username.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })

// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden");
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden");
// })
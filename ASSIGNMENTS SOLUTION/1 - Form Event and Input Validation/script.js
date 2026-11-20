// q1 & q2

// const form = document.querySelector("#form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("Form submitted successfully")
// })

// q3

const inputName = document.querySelector("#name")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const value = document.querySelector("#name").value
//     console.log(value);
// })

// q4

// const skillList = document.querySelector("#skills")

// skillList.addEventListener("change", (e) => {
//     if (e.target.value) {
//         console.log(e.target.value);
//     }
// })

// q5

inputName.addEventListener("focus", (e) => {
    inputName.style.outlineColor = "red"
})

// q6

// inputName.addEventListener("blur", (e) => {
//     console.log("You left the input field.");
// })

// q7 , q8 , q9 and q10

const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameValue = inputName.value
    const email = inputEmail.value
    const password = inputPassword.value
    if (!nameValue) {
        console.log("Name field is required.");
        return
    }
    if (!email) {
        console.log("Email field is required.");
        return
    }
    if (!password) {
        console.log("Password field is required.");
        return
    }
    if (password.length < 6) {
        console.log("Password must be atleast 6 characters");
        return
    }
    console.log(name = nameValue , email , password) ;

})
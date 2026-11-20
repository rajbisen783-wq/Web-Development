// q1

const btn = document.querySelector("#btn");
const removeBtn = document.querySelector("#remove-btn");
const btnTxt = document.querySelector("#btn-text");

const addText = () => {
    // console.log("Button Clicked");
    btnTxt.textContent = "Button Clicked"
}

btn.addEventListener("click", addText)

removeBtn.addEventListener("click", () => {
    btnTxt.textContent = ""
})

// q2

const changeTextBtn = document.querySelector("#change-text-btn");
const changeText = document.querySelector("#change-text");

changeTextBtn.addEventListener("click", () => {
    if (changeText.textContent === "Welcome to my website!") {
        changeText.textContent = "Thanks for visiting!"
        return
    }
    changeText.textContent = "Welcome to my website!"
})

// q3

const intro = document.querySelector("#intro")
intro.addEventListener("mousecover", (e) => {
    intro.textContent = "Hello mera naam Raj hai"
    intro.style.backgroundColor = "yellow"
    // console.log(e.target.tagName);
})

intro.addEventListener("mouseleave", (e) => {
    intro.textContent = "Hii my name is Raj"
    intro.style.backgroundColor = "white"
})

// q4

btn.addEventListener("click", (e) => {
    console.log(e.target.tagName);
})

// q5

function fun1(e) {
    console.log({ x: e.x, y: e.y });
}

btn.addEventListener("click", fun1)

// q6

const input = document.querySelector("#input")
input.addEventListener("focus", (e) => {
    // const value = e.target.value;
    // console.log(value)
})
input.addEventListener("blur", (e) => {
    // const value = e.target.value;
    // console.log(value)
})

input.addEventListener("input" , (e) => {
    // const value = e.target.value;
    // console.log(value)
})

// q7

// removeBtn.addEventListener("click" , () => {
//     btnTxt.textContent = ""
//     btn.removeEventListener("click" , addText)
// })

// q8

// btn.addEventListener("click" , addText , {once : true})

// q9

// document.querySelector("#parent").addEventListener("click" , (e) => {
//     e.stopPropagation() // this stops the event bubbling
//     console.log("parent clicked");
// })

// document.querySelector("#button").addEventListener("click" , (e) => {
//     e.stopPropagation() // this stops the event bubbling
//     console.log("button clicked");
// })

// q10 is same as q9

// q11
// don't use capture
// document.querySelector("#parent").addEventListener("click" , (e) => {
//     e.stopPropagation() // this stops the event bubbling
//     console.log("parent clicked");
// } , {capture: true})

// document.querySelector("#button").addEventListener("click" , (e) => {
//     e.stopPropagation() // this stops the event bubbling
//     console.log("button clicked");
// })

// q12

// document.querySelector("#html").addEventListener("click" , (e) => {
//     console.log(e.target.textContent)
// })

// document.querySelector("#css").addEventListener("click" , (e) => {
//     console.log(e.target.textContent)
// })

// document.querySelector("#js").addEventListener("click" , (e) => {
//     console.log(e.target.textContent)
// })

// solution of above problem

document.querySelector("#buttons").addEventListener("click" , (e) => {
    if(e.target.id === "buttons"){
        return
    }
    // console.log(terget = e.target);
    // console.log({currentTarget : e.currentTarget});
    console.log(e.target.textContent);
})

// q13 is same as q12
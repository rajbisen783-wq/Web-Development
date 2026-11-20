
// console.log("Task 1") ;

// console.log("Task 2") ;
// for (let i = 0 ; i < 1000000000 ; i++) {

// }

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 1000) {

// }


// console.log("Task 3") ;

// console.log(globalThis) ;
// console.log(document) ;





// console.log("Task 1") ;


// setTimeout(function cb() {
//     console.log("Task 2") ;
//     let startTime = Date.now() // ms
//     while(Date.now() - startTime < 1000) {

// }
// }, 0) 
// console.log("Task 3") ;




// console.log("Task 1") ;

// setTimeout(() => {
// console.log("Task 2") ;
// }, 4000)

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 3000) {

// }

// setTimeout(() => {
// console.log("Task 5") ;
// }, 1000)
// setTimeout(() => {
// console.log("Task 4") ;
// }, 2000)


// console.log("Task 3") ;

// let count = 1
// let id = setInterval(function () {
// count++ ;
//     if (count > 5) {
//         clearInterval(id)
//     }
//     console.log("Hii");
// }, 0)/

const body = document.querySelector("body")

let colorStr = "0123456789abcdef"

setInterval(() => {
    let color = ""
for (let i = 0 ; i < 6 ; i++) {
    let randomValue = Math.floor(Math.random() * colorStr.length) 
    color = color + colorStr[randomValue] ;
}

body.style.backgroundColor = `#${color}`

}, 100) ;
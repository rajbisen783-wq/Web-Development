

//  1. Callback Function -->

// function fun1(callback) {
//     console.log("Hii") ;
//     callback()
// }

// function cb() {
//     console.log("This is a callback function") ;
// }

// fun1(cb)

// let arr = ["a", "b", "c", "d"]


// 2. Higher Order Functions -->

// function a() {
//     function b() {

//     }
//     return b
// }


// 3.  A-Syncronus -->

function searchPizza(a) {
    console.log("Pizza searching...");
    setTimeout(function fun1() {
        console.log("Here is the Pizza's Menu.")
        let price = 500;
        a(price)
    }, 2000)
}

function addToCart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(function fun2() {
        console.log("Pizza added to cart");
        cb2()
    }, 3000)
}

function payment(price) {
    console.log(`Payment Initiated , Amount : ${price} `);
    setTimeout(function fun3() {
        console.log(`Payment Completed , Amount : ${price} `);
        console.log("Bas aa hi gaya Pizza");
    }, 5000)
}
searchPizza(function a(price) {
    addToCart(function b() {
        payment(price)
        payment(price)
    })
})

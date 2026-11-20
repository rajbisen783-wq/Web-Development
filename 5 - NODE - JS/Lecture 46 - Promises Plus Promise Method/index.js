
// console.log("a") ;

// const p = new Promise(function (resolve, reject) {
//     resolve("Hii")
//     reject("Server down hai beta")
// })

// console.log("c");
// console.log(typeof p) ; // Object
// console.log(p);

// p.then(function onFulfilled(val) {
//     conaole.log(val);
// }, function onRejection(val) {
//     console.log(val);
// })

// const res = p.then(function(val) {
//     console.log(val);
// }, function(val){
//     console.log(val);
// })

// .then(() => {}, () => {})
// .then()
// .then()

// const res = p.then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).catch(function (val){
//     console.log(val);
// }).finally(function(){
//     console.log("Ye to hamesha chalega")
// })

// console.log("a")

// const p2 = new Promise(function f1(resolve, reject){
//     console.log("b");
//     resolve("hello")
//     console.log("random");
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);
// }).catch(function f3() {
//      console.log("catch");
// }).finally(function fun4() {
//      console.log("finally")
// })

console.log("c");

const p3 = new Promise(function f1(resolve, reject){
    resolve() // Ye line sirf aur sirf ye batati hai ki promise fulfill ho gaya that's it 
})

// Promise.resolve().then(function f2(){
//     console.log("f2 function");
// })

// setTimeout(function fun3(){
//     console.log("setTimeout");
// }, 2000)

// p3.then(function f3() {
//     console.log("f3 function");
// })

// Promise.resolve().then(function f2(){
//     console.log("f2 function");
// })

// Promise.resolve().then(function f2(){
//     console.log("f2 function");
// })

// Promise.resolve().then(function f2(){
//     console.log("f2 function");
// })

function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })
}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza added to cart");
            resolve(price)
        }, 3000)
    })
}

function payment(price) {
    return new Promise(function (resolve, reject){
        console.log(`Payment Initiated , Amount: ${price}`);
        setTimeout (function (fun3){
            let isPaymentSuccessful = false 

            if(isPaymentSuccessful) {
                console.log(`Payment Completed, Amount:${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }
        }, 5000)
    })
}

// searchPizza().then(function(price){
//     console.log(price);
// })

let res = searchPizza()
let price = 0
res.then(function (price) {
    return addToCart(price)
}).then(function (price) {
    return payment(price)
}).then(function (price){
    console.log("Bas Aa hee gaya Pizza");
}).catch(function(err){
    console.log(err) ;
})

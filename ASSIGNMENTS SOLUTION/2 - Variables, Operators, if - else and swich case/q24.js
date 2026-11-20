let balance = 235;
let withdrawAmount = 30;

if(withdrawAmount < 0 ) {
console.log("Invalid withdrawAmount");
} else if(withdrawAmount > balance){
    console.log("Insufficient Balance");
} else {
    let remaining = balance - withdrawAmount;
    console.log("Withdraw Successfull");
    console.log("Remaining Amount", remaining)
}
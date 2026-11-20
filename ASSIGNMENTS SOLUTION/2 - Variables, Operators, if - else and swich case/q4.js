let price = 1000;
let quantity = 2;

let originalBill = price * quantity;
let discount = originalBill * 10 /100; 
let finalBill = originalBill - discount;

console.log("Originsl Bill" , originalBill);
console.log("Discount" , discount);
console.log("Final Bill" , finalBill);
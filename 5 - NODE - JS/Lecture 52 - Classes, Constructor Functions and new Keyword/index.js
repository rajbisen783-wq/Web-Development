
// function outter() {
//     const random = () => {
//         console.log(this);
//     }
//     random()
// }

// outter()
// random()

// console.log(this);

function Product(name, price) {
    this.name = name
    this.price = price
}
const p1 = new Product("Iphone 18 Pro Max", "150000");
const p2 = new Product("Samsung Galaxy S26 Ultra", "160000");

// console.log(p1);
// console.log(p2.name);

class User {
    country = "india"  // default property
    cunstructor(name, country2) {
        this.name = name // instance property
        this.country = country2 // instance property
    }

    printName() { // instance method
        console.log(this.name);
    }
}

const u1 = new User("Raj", "India")
const u2 = new User("Shreya", "India")

u1.name = "Name Updated"
// console.log(u1);

class BankAccount {
    #balance; // this is private property
    static totalBankAccount = 0;
    constructor(initialBalance) {
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }
    get() { // method
        console.log(this.#balance)
    }

    withdraw(amount) { // method
        if (amount > this.#balance) {
            console.log("Bete itne paise na hai tere paas");
            return
        }
        this.#balance = this.#balance - amount
    }

    deposit(amount) { // method
        if (amount <= 0) {
            console.log("Bete pagal samjha hua hai kya, mujhe aate hai edge cases handle karne gareeb");
            return
        }
        this.#balance = this.#balance + amount
    }
    static calculateTax() { // static method
        console.log("calculating tax....");
    }
}

let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);

// acc1.get()
// acc1.withdraw(500)
// acc1.get()
// acc1.withdraw(14322)
// acc1.get()
// acc1.withdraw(14000)
// acc1.get()

// acc1.#balance = 1200213123 // Private field '#balance' must be decleard in an enclosing class

acc1.get()

acc1.deposit(-111)
acc1.get()
// acc1.calculateTax() // acc1.calculateTax is not a function
// BankAccount.calculateTax
console.log(BankAccount.totalBankAccount);
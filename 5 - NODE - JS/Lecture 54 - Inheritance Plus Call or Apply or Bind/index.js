
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() { console.log("login"); }
    logout() { console.log("logout"); }
    static sendEmail(){ }
}

class Customer extends User {
    cart = []
    constructor(name, email, password = "abcd") {
        super(name, email)
        this.password = password
        // this.name = name;
        // this.email = email;
    }
    buyProduct() {console.log("buy Product");}
    addToCart() {this.cart.push(item)}
    showCartItems(){console.log(this.cart);}
    // login(){}
    // logout(){}
} 

class Seller extends User {
    // constructor(name, email) {
        // this.name = name;
        // this.email = email;
    // }
    addProduct() {console.log("add Product");}
    // login(){}
    // logout(){}
}

class Admin extends User {
    // constructor(name, email) {
        // this.name = name;
        // this.email = email;
    // }
    hideProduct() {console.log("hide Product");}
    // login(){}
    // logout(){}
}

const c1 = new Customer("raj", "raj@example.com", "abcd")
const s1 = new Seller("shreya", "shreya@example.com")
// const a1 = new Admin("vicky", "vicky@example.com")
// console.log(c1)
// console.log(s1)
// console.log(a1)
// c1.logout()
// CanvasRenderingContext2D.addToCart("MacBook")
// c1.showCartItems()

class PremiumCustomer extends Customer {
    constructor(name, email, pass){
        super(name, email, pass)
    }
    getDiscount(){}
}

const pc1 = new PremiumCustomer("abcd", "xyz")
console.log(pc1)
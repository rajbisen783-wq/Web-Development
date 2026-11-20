let balance = 235;
let withdrawAmount = 200;
let deposit = 300;
let choice = 3;


switch (choice) {
    case 1:
        console.log("Current Balance :" , balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit;
            console.log("Money deposited successfully");
            console.log("New Balance" , balance);
        } else {
            console.log("Invalid deposit amount");
        }
        break;
    case 3:
        if (withdrawAmount <= 0) {
            console.log("Invalid withdraw amount");
        } else if (withdrawAmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmount;
            console.log("Withdraw Successfull");
            console.log("Remaining Amount" , remaining);
        }
        break;
    case 4:
     console.log("Thanks for using the ATM");
        break;
    default:
        console.log("Invalid choice");
}
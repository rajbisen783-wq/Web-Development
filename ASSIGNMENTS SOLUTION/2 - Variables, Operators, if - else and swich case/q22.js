let num1 = 53;
let num2 = 4;
let choice = 1

switch (choice) {
    case 1:
        console.log("Addition" ,num1  + num2);
        break;
    case 2:
        console.log("Multiplication" ,num1 * num2);
        break;
    case 3:
        console.log("Substitution" ,num1 - num2);
        break;
    case 4:
        if (num2 === 0) {
            console.log("Canno devide by zero")
        } else {
            console.log("Devision" ,num1 / num2);
        }

        break;
    case 5:
        console.log("Reminder" ,num1 % num2);
        break;
    default:
        console.log("Invalid choice")
}
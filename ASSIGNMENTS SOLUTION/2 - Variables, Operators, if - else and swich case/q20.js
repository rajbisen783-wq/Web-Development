let num1 = 53;
let num2 = 0;
let operator = "/"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Canno devide by zero")
        } else {
            console.log(num1 / num2);
        }

        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid operator")
}
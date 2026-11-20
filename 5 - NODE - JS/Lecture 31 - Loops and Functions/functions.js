
// BASIC CALCULATION

let alokMarks = 46 + 56 + 23 ;
let addiMarks = 24 + 24 + 42 ;
let karan = 54 + 23 + 65 ;
let anu = 54 + 52 + 23 ;

// PRODUCT PRICE CALCULATION

// let productPrice = 3000 ;
// let discountAmount = 3000 * 50 / 100 ;
// let deliveryCharge = 50 ;
// let totalAmount = productPrice - discountAmount + deliveryCharge ;

// FUNCTION - PARAMETERS & ARGUMENTS

// function totalMarks(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     console.log(`${studentName} totalMarks : `, mathMarks + scienceMarks + sanskritMarks);
// }

// totalMarks("Alok", 46, 56, 23);
// totalMarks("Addi", 24, 24, 42);
// totalMarks("Karan", 54, 23, 65);
// totalMarks("Anu", 54, 52, 23);

// DEFAULT PARAMETERS

// function greetingMsg(userName = "Guest", greetings = "Hii") {
//     console.log(`${greetings} , ${userName}`);
// }

// greetingMsg("Priyanshu");
// greetingMsg("Anshika");
// greetingMsg("Satyam", "Ki hal hai");
// greetingMsg("Saif");

// CALCUTOR - FUNCTION + PARAMETERS + SWITCH

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2}  = `, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2}  = `, num1 - num2);
//             break;
//     }
// }

// calculator(4, 5, "-");

// RETURN STATEMENT

function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
    return mathMarks + scienceMarks + sanskritMarks;
}

// RETURN + FUNCTION CALLING ANOTHER FUNCTION

function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
    let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
    let percentage = (total / 300) * 100
    console.log(`${studentName} percentage : ${percentage}`);
    return percentage;
}

// ARRAY

let students = [
    ["Alok", 46, 56, 23],
    ["Addi", 24, 24, 42],
    ["Karan", 54, 23, 65],
    ["Anu", 54, 52, 23],
];

// ARRAY + FOR LOOP + FUNCTION

for (let i = 0; i < students.height; i++) {
    calPercentage(
        students[i][0],
        students[i][1],
        students[i][2],
        students[i][3],
    );
}

// FUNCTION DECLARATION + HOSTING

// fun1();
// function fun1() {
//     console.log("function declearation");
// }

// FUNCTION EXPRESSION

// console.log(add(5, 7));

// let add = function (num1, num2) {
//     return num1 + num2;
// };

// ARROW FUNCTION

// Syntax 1
// let add = num1 => num1 + 4;

// Syantax
// let add = (num1, num2) => num1 + num2 ;

// Syntax 3

// let add = (num1 , num2) => {
//     something
// return num1 + num2 ;
// }

// console.log(add(5, 7)) ;
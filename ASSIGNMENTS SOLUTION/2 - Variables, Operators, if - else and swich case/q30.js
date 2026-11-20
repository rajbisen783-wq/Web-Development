let student = "Raj";
let rollNumber = 33;
let mathMarks = 56;
let scienceMarks = 65;
let englishMarks = 35;

let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100
let Grade ;
let result = "PASS"

if(percentage < 0 || percentage > 100){
console.log("Invalid percentage")
} else if (percentage >= 90 && percentage <= 100) {
    Grade = "A"
}  else if (percentage >= 80 && percentage <= 89) {
    Grade = "B"
}  else if (percentage >= 70 && percentage <= 79) {
    Grade = "C"
}  else if (percentage >= 60 && percentage <= 69) {
    Grade = "D"
}  else if (percentage >= 40 && percentage <= 59) {
    Grade = "E"
} else {
    Grade = "F"
}

if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
    result = "FAIL"
}

console.log("Name : " , student);
console.log("Roll no : " , rollNumber);
console.log("Math : " , mathMarks);
console.log("Science : " , scienceMarks);
console.log("Total : " , totalMarks);
console.log("Percentage : " , percentage);
console.log("Grade : " , Grade);
console.log("Result : " , result);
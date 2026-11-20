
let originalPrices = [463, 654, 2346] ;

let discountPrices = [] ;

// for (value of originalPrices) {
//     let discount = value * 10/100 
//     let discountPrices.push(value - discount) // 10% discount
//     discountPrices.push(value * 0.9) // 10% discount
// }

originalPrices.forEach((value) => {
    discountPrices.push(value*0.9) // 10% discount
})

// console.log(originalPrices) ;
// console.log(discountPrices) ;

const discountPrices2 = originalPrices.map((value) => value * 0.9)

// console.log(discountPrices2) ;

let students = [
    {
        name: "Ayaan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Debdrita",
        marks: 33,
    },
    {
        name: "Shivan",
        marks: 30,
    },
    {
        name: "Alauddin",
        marks: 28
    }
]

// let studentNames = []

// students.forEach((value) => {
//     studentNames.push(value.name)
// })

const studentsNames = students.map((student) => student.name)
const studentMarks = students.map((student) => student.marks)

// console.log(studentNames, studentMarks) ;

let boostedMarks = students.map(student => ({
    ...student, marks:student.marks + 10 }))
    // let boostedMarks = students.map(student => student.marks < 33) // [false,false,false,true,true]

// console.log(boostedMarks) ;

// let failedStudents = []

// students.forEach((student) => {
//     if(student.marks < 33) {
//         failedStudents.push(student)
//     }
// });

const failedStudents = students.filter((student) =>
    student.marks<33).map((student) => student.name) // [{name:'shivan', marks:30}, {name:'Alauddin', marks:28}]

// filter ak use karke agar hamko names hi dikhane hai marks nahi to sir 
// const failedStudentsName = failedStudents.map((student) => student.name)
// console.log(failedStudents) ;

let marks = [56, 24, 62, 73, 78]

let totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks + mark)

// const totalMarks = marks.reduce((totalMarks, mark) => totalMarks + mark, 0)

// console.log(totalMarks) ;

const attendence = ["present", "present", "absent", "present", "absent"]

// -> {present:3, absent:2}

// let obj = {}

// attendence.forEach((value) => {
// if (obj[value] = obj[value] + 1)
// } else {
// obj[value] = 1
// }

// })

// console.log(obj) ;

//by reduce

const obj = attendence.reduce((acc, value) =>{
    acc[value] = (acc[value] || 0) + 1 ;
    return acc 
}, {})

console.log(obj) ;
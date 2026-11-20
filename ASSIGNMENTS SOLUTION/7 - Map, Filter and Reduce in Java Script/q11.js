
const users = [
    {name: "Rahul", role: "Developer"},
    {name: "Priya", role: "Student"}
]

const developers = users.filter(u => {
    // if(u.role === "Developer"){
    //     return users
    // }

    return u.role === "Developer"
})

console.log(developers)
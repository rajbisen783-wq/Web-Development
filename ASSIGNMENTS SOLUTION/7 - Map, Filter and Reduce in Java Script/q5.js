
const users = [
    {name: "Rahul", role: "student"},
    {name: "Priya", role: "student"}
]

const userNameWithUpdatedRole = users.map(u => {
    return {...u, role: "Developer"}
})

console.log(users);
console.log(userNameWithUpdatedRole);
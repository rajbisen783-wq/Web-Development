
let users = [
]

let output = users.findIndex(function(user) {
    // if(user.name === "Rahul") {
    //     return user
    // }

    // short syntax
    return user.name === "Priya"
});

console.log(output);
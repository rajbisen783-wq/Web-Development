
const user = {
name: "Rahul",
email: "Rahul@example.com",
role: "Developer"
};

// const newUser = user // galat tareeka

const newUser = [...user] // using spread operator

user.name = "Random"

console.log(...user);
console.log(newUser);
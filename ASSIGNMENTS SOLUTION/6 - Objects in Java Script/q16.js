
const user = {
name: "Rahul",
email: "Rahul@example.com",
role: "Developer"
};

// const newUser = user // galat tareeka

const newUser = {...user , role : "Hacker"} // using spread operator

console.log("user" , user);
console.log("newUser" , newUser);

const user = {
name: "Rahul",
email: "Rahul@example.com",
isLoggedIn: true
}

Object.entries(user).forEach(property => {
    const {key, value} = property 
    console.log(`${key}: ${value}`);
})

const user = {
name: "Rahul",
email: "Rahul@example.com",
isLoggedIn: true
};

function displayUser ({name , email , isLoggedIn}) {
    console.log(name);
    console.log(email);
    console.log(isLoggedIn)
}

displayUser(user);
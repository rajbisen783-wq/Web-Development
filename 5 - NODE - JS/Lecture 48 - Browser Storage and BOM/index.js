
// localStorage.setItem("num1", 1)
// localStorage.setItem("num2", 1)
// localStorage.setItem("num4", 1)

// let result = localStorage.getItem("nishant"); // Ye null dega kyuki local storage me nishant key nahi hai
// console.log(result);

// let result2 = localStorage.key(0)
// console.log(result2);

// localStorage.removeItem("num")

// document.querySelector("#clear-local-storage").addEventListener("click", () => {
//     sessionStorage.setItem("session", "item")
// })

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET","", true) // github api link add karna hai
// xhttp.send();

// fetch("").
// then(data => data.json()).
// then(data => console.log(data))

// async function getUser(username = "nishantsaini2331") {
//     const response = await
//     fetch(`${username}`)
//     const data = await response.json()
//     return data;
// }

document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value
    const data = await getUser(username)
document.querySelector("#show-profile").innerHTML=`<img src=${data.avatar_url} width="100px" height="100px" alt="">
<h2>${data.name}</h2>
<i>${data.login}</i>
<p>${data.bio}</p>
<p>${data.followers}</p>
<p>${data.following}</p>
<p>${data.public_repos}</p>`

})

function updateStatus() {
    document.querySelector("#live-status").textContent = navigator.onLine? "Online" : "Offline"
}

window.addEventListener("online", updateStatus)
window.addEventListener("offline", updateStatus)

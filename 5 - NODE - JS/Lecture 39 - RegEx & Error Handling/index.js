
// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")

// let h1 = document.querySelectorAll("#h1")
// console.log(h1)

// let p = document.querySelector("#desc")

// p.textContent = "<h2>Hello Dosto</h2>"
// p.innerHTML = "<h2>Hello Dosto</h2>"
// very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);


// p.setAttribute("style", "background-color: pink ; font-size: 50px") ;

// let btn = document.querySelector("#btn") ;

// btn.setAttribute("disabled", "false")
// btn.removeAttributes("disabled")
// btn.textContent = "Remove"


// let res = p.getAttribute("style") 

// console.log(res) ;


// p.removeAttributes("style")

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toogle("random")

// console.log(p.classList.contains("random")) ;


// p.style.backgroundColor = "red"  // camel case

// p.dataset.helloDostoHii = "hii"

// console.log(p.dataset.helloDostoHii) ;

// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "Div 2"

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.appendChild(div , div2) ;  // Insert in last of body .
// body.prependChild(div , div2) ;  // Insert in start of body .

let products = [
    {
        name: "I-Phone 18",
        price: 12342,
        imgUrl: "",
    },
    {
        name: "Samsung 15",
        price: 63324,
        imgUrl: "",
    }, 
    {
        name: "MI 23",
        price: 35354,
        imgUrl: "",
    }, 
    {
        name: "Poco 10",
        price: 43534,
        imgUrl: "",
    }, 
    {
        name: "Lava 12",
        price: 53422,
        imgUrl: "",
    },
]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div") ;
    card.classList.add("singleProduct") ;

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img") 

    // img.setAttribute("src", "") ;

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)

    card.innerHTML = `<div><img src=${product.imgUrl} alt=""></div>
    <div class="productDetail"><P>${product.name}</p>
    <P>${product.price}</p></div>`

    productList.append(card) ;
    
})

let h2 = document.querySelector("#h23")

// body.removeChild(h2) ;  // You have to perform on parent

h2.remove() ; // Directly on the element you want to remove

let clone = productList.cloneNode(true) ;

// body.append(clone)

const items = productList.children

// productList.insertBefore(h2, items[2]) ; // For precise positioning

// items[2].before(h2)
items[2].after(h2)
// let cart = [{name:"Apple", category: "fruit"}, {name: "Mango", catogery: "fruit"}]

// const result = cart.filter(item => {
//     if(item.catogery === "fruit"){
//         return item
//     }
// })

// console.log(result);

const products = [
    {name: "laptop", instock: true},
    {name: "Mouse", instock: false}
]

const instockProducts = products.filter(p => {
    if(p.instock){
        return p
    }
})

console.log(instockProducts)
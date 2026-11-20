
const products = [
    {name: "Laptop", price: 500000},
    {name: "Mouse", price: 500}
]

const updatedProducts = products.map(p => {
    return {...p, inStock: true}
})

console.log(products);
console.log(updatedProducts);
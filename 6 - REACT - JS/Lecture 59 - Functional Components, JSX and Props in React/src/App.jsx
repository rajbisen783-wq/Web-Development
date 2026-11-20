// console.log(2);

const user = {
  name: "Raj",
  isLoggedIn: true, 
};

const products = [
  {
    title: "Nike ka jutta",
    price: 599,
  },
  {
    title: "Puma ke shoes",
    price: 499,
  },
  {
    title: "Goldstar (Old is Gold)",
    price: 549,
  },
];

function App() {
  // console.log(1);

  return (
    <div>
      <Navbar user={user}/>
      <products products={products}>
        <p>Products</p>
        <a href="">go to this link</a>
      </products>
      <Body/>
      <FooterUpdate/>
    </div>
  );
}

export default App
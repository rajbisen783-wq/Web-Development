import { useCallback, useMemo, useState } from 'react';
import ChildComponent from './components/ChildComponent';

function calculateTotalSum() {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [count, setCount] = useState(0);
  const value = useMemo(() => {
    console.log("use memo");
    return calculateTotalSum()
  }, [])


// function printHello() {
// re create on every re render with row reference
// console.log("hii hello jii");
// }

// function printHello2() {
//   console.log("hii hello jii");
// }

// console.log(printHello = printHello2);

const memoizePrintHello = useCallback(() => {
  console.log("hii hello jii");
}, [])

let obj = {
  count: 53,
  printHello: memoizePrintHello,
};

return (
  <div>
    <p>Value: {count}</p>
    <button onClick={() => setCount((p) => p + 1)}>Click</button>
    <p>Total sum : {value}</p>
    {/* <ChildComponent count={count}/> */}
    <ChildComponent {...count} />
  </div>
);
}

export default App;
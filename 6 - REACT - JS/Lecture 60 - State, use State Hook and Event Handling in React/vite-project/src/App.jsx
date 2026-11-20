import { useState } from 'react'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import Todo from './components/Todo'


function App() {

  // let value = 0
  const [count, setCount] = useState(0)
  function printCountValue(val){
    // console.log(value);
    setCount(val)
  }

  return (
    <div>
     {/* <Navbar count={value}/>
     <Counter printCountValue={printCountValue}/> */}
     <Todo/>
     {/* <Counter/> */}
    </div>
  )
}

export default App
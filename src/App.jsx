import { useState } from "react"
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";



function App() {

  const [count, setCount] = useState(0);


  return (
    <>
      <section>
        <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
        <ComponentTwo  count={count} onClickHandler={() => setCount(count + 1)} />

         <ExampleOne /> 

         <ExampleTwo />

         <ExampleThree />
      </section>
    </>
  )
}

export default App

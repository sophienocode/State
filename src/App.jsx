import { useState } from "react"
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import Counter from "./Challenge/Counter";
import TodoList from "./Challenge/TodoList";



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

         <h1>Challenge Exercises</h1>
         <h2>Step 1: </h2>
         <p>Basic Usage of useState</p>
         
         <Counter />

         <h2>Step 2: </h2>
         <p>useState with an Array of Data</p>

         <TodoList />

         <h2>Step 3: </h2>
         <p>useState with an Obkect of Data</p>
      </section>
    </>
  )
}

export default App

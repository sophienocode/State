import { useState } from "react"


export default function TodoList() {

    const [list , setList] = useState([ ])

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

            if(inputValue.trim()) {
                setList([...list, inputValue])
                setInputValue('')
            }
        
    }
    

    

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new items"
        
        />

        <button type="submit" > Add new Items</button>

        <ul> {list.map((item, index) => (
            <li key={index} >{item} </li>
        ))} </ul>
    </form>
    </>
  )
}
 
import { useEffect, useState } from "react"


export default function ExampleThree() {

    /*
    
    Ele cria um state (name) que:

    tenta pegar um nome salvo no localStorage

    se existir, usa esse valor

    se não existir, começa com uma string vazia ""

    */

    /* React lê o nome do localStorage */
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");

        return savedName ? JSON.parse(savedName) : ""
    })

    /*  useEffect salva no localStorage */
    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])
    
    /*  setName atualiza o state */
    const handleChange = (event) => {
        setName(event.target.value);
    }
    /* botão Clear que remove do localStorage */
    const handleClear = () => setName("")




  return (
    <>
      <section>
        <h1>Your Name: {name} </h1>
        <input type="text"
         value={name} 
         onChange={handleChange}
        placeholder="Enter your name"
        />

        <button onClick={handleClear} >Clear Name</button>

      </section>
    </>
  )
}

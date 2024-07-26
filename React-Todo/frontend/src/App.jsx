import { CreateToDO } from "./components/CreateToDO"
import { Todos } from "./components/Todos"

import './App.css'
import { useState } from "react"

function App() {
     //   const [count, setCount] = useState(0)
     let [todos, setTodos] = useState([])
     
     try {
          fetch("http://localhost:3000/todos")
          .then(async function (res) {
               let jsonData = await res.json()
               setTodos(jsonData.todos)
     })
     } catch (error) {
          console.log(error);
     }
  return (
     <>
            <CreateToDO />
            <Todos todos={todos}/>
     </>
  )
}

export default App

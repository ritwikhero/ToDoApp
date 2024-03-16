// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'
function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <CreateToDo />
        <Todos todos={[{
          title : "Go to Gym",
          description : "Go to the Gym everyday",
          completed : false,
        }]}></Todos>

      </div>
  )
}

export default App

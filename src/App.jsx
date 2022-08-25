import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardOne from './components/card'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex flex-col space-y-2">
      <CardOne />
      <Button />
      </div>
    </div>
  )
}

export default App

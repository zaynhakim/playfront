import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardOne from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardOne />
    </div>
  )
}

export default App

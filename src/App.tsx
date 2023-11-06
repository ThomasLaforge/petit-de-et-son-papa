import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Die } from './components/Die'

function App() {

  const [value, setValue] = useState(0)

  const handleRoll = (value: number) => {
    setValue(value)
  }

  return (
    <>
      <Die onRoll={handleRoll} />
      <p>{value}</p>
    </>
  )
}

export default App

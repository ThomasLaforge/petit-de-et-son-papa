import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { Die } from './components/Die'

function App() {
  const [diceValues, setValues] = useState([2, 5, 6]);

  const sum = useMemo(() => diceValues.reduce((a, b) => a + b, 0), [diceValues])

  const handleRoll = useCallback(
    (diceIndex: number, newValue: number) => {
      setValues((prev) => {
        const newValues = [...prev]
        newValues[diceIndex] = newValue
        return newValues
      })
    },
    []
  )

  return (
    <>
      {diceValues.map((valeur, index) => (
        <Die 
          key={index}
          onRoll={(value: number) => handleRoll(index, value)} 
        />
      ))}
      <div className="sum">Sum: {sum}</div>
    </>
  )
}

export default App

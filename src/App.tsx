import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import './App.css'
import { Die } from './components/Die'

function App() {
  const [diceValues, setValues] = useState([0, 3, 5]);
  const [inputValue, setInputValue] = useState('')

  const diceSum = useMemo(
    () => {
      let sum = 0
      for(let i = 0; i < diceValues.length; i++) {
        sum += diceValues[i]
      }
      return sum
    },
    [diceValues]
  )
  
  const handleRoll = useCallback(
    (dicePosition: number, newVal: number) => {
      console.log(`Dice ${dicePosition} rolled ${newVal}`);
      
      setValues((oldValues) => {
        const newValues = [...oldValues]
        newValues[dicePosition] = newVal
        return newValues
      })
    },
    []
  )

  return (
    <>
      {diceValues.map((diceValue, index) => (
        <Die
          key={index} 
          onRoll={(newValue) => handleRoll(index, newValue)}
        />
      ))}
        <p>{diceValues.join(', ')}</p>
        <p>Sum: {diceSum}</p>
    </>
  )
}

export default App

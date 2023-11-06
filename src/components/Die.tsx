import { useCallback, useState } from "react"

export function Die(props: {onRoll: (value: number) => void}){
    const [value, setValue] = useState(Math.floor(Math.random()*6 + 1))

    const roll = useCallback(() => {
        const newValue = Math.floor(Math.random()*6 + 1)
        setValue(newValue)
        props.onRoll(newValue)
    }, [])
    return <div className="die" onClick={roll}>
        {value}
    </div>
}
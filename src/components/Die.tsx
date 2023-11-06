import { useCallback, useEffect, useState } from "react"

export function Die(props: { onRoll: (newValue: number) => void}){
    const [value, setValue] = useState(Math.floor(Math.random()*6 + 1))

    const roll = useCallback(() => {
        const newValue = Math.floor(Math.random() * 6 + 1)
        props.onRoll(newValue)
        setValue(newValue)
    }, [props.onRoll])

    return <div className="die" onClick={roll}>
        {value}
    </div>
}
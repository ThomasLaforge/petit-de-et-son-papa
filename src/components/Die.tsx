import { useCallback, useEffect, useState } from "react"

export function Die(props: { 
    onRoll?: (newValue: number) => void,
} ){
    const [value, setValue] = useState(Math.floor(Math.random() * 6 + 1))   

    useEffect(() => {
        console.log('on change')
        return () => {
            console.log('on unmount')
        }
    }, [value])

    const roll = useCallback(() => {
        const newValue = Math.floor(Math.random() * 6 + 1)
        props.onRoll && props.onRoll(newValue)
        setValue(newValue)
    }, [])

    return <div className="die" onClick={roll}>
        {value}
    </div>
}
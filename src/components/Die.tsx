import { useCallback, useState } from "react"

export function Die(){
    const [value, setValue] = useState(Math.floor(Math.random()*6 + 1))

    const roll = useCallback(() => {
        setValue(Math.floor(Math.random()*6 + 1))
    }, [])
    return <div className="die" onClick={roll}>
        {value}
    </div>
}
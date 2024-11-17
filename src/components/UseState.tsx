import { useState } from 'react'
import Button from './Button'

const UseState = () => {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubtract() {
        setCount(count - 1)
    }

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold">UseState {count}</h1>
            <div className="flex gap-6">
                <Button onClick={handleAdd}
                    name="Add Count"
                />
                <Button onClick={handleSubtract} 
                    name="Sub Count" 
                    color="red"
                    borderColor="red"
                />
            </div>
        </div>
    )
}

export default UseState

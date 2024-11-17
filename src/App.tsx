import './App.css'
import './input.css'
import './output.css'
import ProductsList from './components/ProductsList'
import UseState from './components/UseState'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubtract() {
        setCount(count - 1)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsList />
            <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract}/>
            <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract}/>
        </div>
    )
}

export default App

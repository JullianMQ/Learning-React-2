// import React from 'react'
import ProductsList from '../components/ProductsList'
import UseState from '../components/UseState'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubtract() {
        setCount(count - 1)
    }

    return (
        <>
            <Navbar />

            <div className="flex flex-col justify-center items-center">
                <ProductsList />
                <h1 className="text-3xl font-bold mt-8 mb-2 text-red-700">Using useState on one parent</h1>
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />

                <h1 className="text-3xl font-bold mt-8 mb-2 text-red-700">Using useEffect</h1>
                <UsingEffect />
            </div>
        </>
    )
}

// It doesn't matter how dependencies you add to the dependency array
// As long as it changes, the useEffect will fire 
const UsingEffect = () => {
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count is: ${count}`)
    }, [count, newCount])

    return (
        <>
            <button onClick={() => setCount(count + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Click me
            </button>

            <button onClick={() => setNewCount(newCount + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Click me
            </button>
        </>
    )

}

export default Home

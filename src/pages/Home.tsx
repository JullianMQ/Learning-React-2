// import React from 'react'
import ProductsList from '../components/ProductsList'
import UseState from '../components/UseState'
import { useState } from 'react'
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
            </div>
        </>
    )
}

export default Home

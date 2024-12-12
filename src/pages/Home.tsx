// import React from 'react'
import ProductsList from '../components/ProductsList'
import UseState from '../components/UseState'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import autoAnimate from '@formkit/auto-animate'

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
                <h1 className="text-3xl font-bold mt-8 mb-2 text-red-700">useState on one parent</h1>
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />

                <h1 className="text-3xl font-bold mt-8 mb-2 text-red-700">useEffect</h1>
                <UsingEffect />

                <h1 className="text-3xl font-bold mt-8 mb-2 text-red-700">useRef</h1>
                <UsingRef />
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
        <div className="py-4 px-8 mb-4 bg-lime-500 grid rounded w-8/12 lg:w-4/12">
            <p>
                This button increments the count variable which is inside the
                dependency variable
            </p>
            <button onClick={() => setCount(count + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Click me
            </button>

            <p>
                This button still logs the number even though it changes the new count
                Because the new count is also added in the dependency array
            </p>
            <button onClick={() => setNewCount(newCount + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Click me
            </button>
        </div>
    )

}

const UsingRef = () => {
    const [isOpen, setIsOpen] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <div className="rounded border-2 border-teal-600 bg-teal-500 text-white
            w-6/12"
            ref={parent}>
            <h1 onClick={handleClick}
                className="font-bold uppercase"
            >useRef for parent for accordions
            </h1>
            {isOpen && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione alias perspiciatis, nostrum dolore earum facere voluptates ut repellendus expedita tempora consectetur inventore recusandae ex culpa facilis obcaecati at esse. Molestiae.</p>}
        </div>
    )

}

export default Home

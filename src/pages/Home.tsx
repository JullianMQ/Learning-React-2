// import React from 'react'
import ProductsList from '../components/ProductsList'
import UseState from '../components/UseState'
import UseContext from '../components/UseContext'
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

            <div className="flex flex-col justify-center items-center pb-64">
                <ProductsList />
                <h1 className="text-3xl font-bold mt-8 mb-2 text-blue-600">useState on one parent</h1>
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />
                <UseState count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />

                <h1 className="text-3xl font-bold mt-8 mb-2 text-lime-700">useEffect (see logs)</h1>
                <UsingEffect />

                <h1 className="text-3xl font-bold mt-8 mb-2 text-teal-700">useRef</h1>
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
        <div className="pt-2 pb-8 px-8 mb-4 bg-lime-500 grid rounded w-8/12 lg:w-4/12">
            <p className="p-2">
                This button increments the count variable which is inside the
                dependency variable
            </p>
            <button onClick={() => setCount(count + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Add count
            </button>

            <p className="p-2">
                This button still logs the number even though it changes the new count
                Because the new count is also added in the dependency array
            </p>
            <button onClick={() => setNewCount(newCount + 1)}
                className={'rounded active:scale-95 p-1 text-white bg-blue-600'}>
                Add newCount
            </button>
        </div>
    )

}

// Basically useRef acts as a placeholder, in case we want to make an effect on
// something without knowing yet what to place on the useEffect hook
const UsingRef = () => {
    const [isOpen, setIsOpen] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const handleClick = () => setIsOpen(!isOpen)

return (
        <div className="rounded border-2 p-2 border-teal-600 bg-teal-500 text-white
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

// =================================HOOKS TO LEARN=========================================
//
// =================================MOST ESSENTIAL=========================================
// NOTE: 
// 1. useContext - (../components/UseContext.tsx)
//
//  INFO: useContext is used to make components be able to access data that 
//  otherwise need to be pass as props
//  it is used to avoid 'prop drilling'
//
//
// NOTE: 
// 2. useReducer - (../components/UseReducer.tsx)
//
// INFO: Why it's essential: Ideal for managing complex state logic, especially when actions and state transitions are involved.
// How to use it for your movie website:
//
//    Manage your movie lists (e.g., adding, removing, updating movies) with a reducer.
//    Define actions like ADD_MOVIE, REMOVE_MOVIE, and MARK_AS_WATCHED.
//    Combine it with useContext to create a powerful state management system.
const UsingReducer = () => {}

// =================================QUERYING FOR POSTGRESQL=========================================
// ReactQuery or Apollo Client
// Why they're essential: Handles data fetching, caching, and synchronization for server-side data.
// How to use them for your movie website:
//
//    Fetch movie data from an external API (e.g., TMDB) or your backend.
//    Cache API responses to avoid redundant requests and keep the UI in sync with the server.
//    Use useMutation to manage data updates (e.g., adding movies to the backend).
const UsingQuery = () => {}

// =================================MULTIPAGE WEBAPPS=========================================
// =================================REACT ROUTER=========================================
// Why they're essential: Critical for routing and navigation in single-page applications.
// How to use them for your movie website:
//
//    useParams: Access dynamic route parameters, e.g., /movies/:id to display a single movie's details.
//    useNavigate: Programmatically navigate users, e.g., redirect to the homepage after adding a movie.
const UsingParams = () => {}
const UsingNavigate = () => {}


// =================================OPTIONAL=========================================
// =================================PERFORMANCE=========================================
// Why it's essential: Optimizes performance by memoizing expensive calculations.
// How to use it for your movie website:
//
//    Cache derived data, like filtering movies by status (watched/to-watch) or sorting by rating.
//    Example: Avoid recalculating the sorted movie list every render unless the movie list changes.
const UsingMemo = () => {}

// Why it's essential: Prevents unnecessary re-creation of functions, especially when passing them as props.
// How to use it for your movie website:
//
//    Memoize event handlers (e.g., adding or deleting a movie) passed to child components to improve performance.
const UsingCallback = () => {}

// =================================UPGRADES?=========================================
// Why it's essential: Runs synchronously after DOM mutations, ideal for measuring layouts or animations.
// How to use it for your movie website:
//
//    Use it to calculate or adjust layout details, such as ensuring UI elements are positioned correctly.
const UsingLayoutEffect = () => {}

//Why it's essential: Enables exposing specific methods or properties from child components.
//How to use it for your movie website:
//
//    If creating a custom component, like a modal for adding a movie, you can expose methods to control its behavior programmatically (e.g., openModal, closeModal).
const UsingImperativeHandle = () => {}

//Why they're essential: Improve UI responsiveness during heavy updates.
//How to use them for your movie website:
//
//    useTransition: Manage state updates for non-urgent tasks (e.g., filtering a long list of movies).
//    useDeferredValue: Defer expensive calculations (e.g., re-rendering a filtered movie list) to keep the UI snappy.
const UsingTransition = () => {}
const UsingDeferredValue = () => {}
// =================================UPGRADES?=========================================


export default Home

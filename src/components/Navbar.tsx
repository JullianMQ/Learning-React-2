// import React from 'react'
import '../output.css'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="w-screen">
                <nav className="grid grid-cols-3 grid-rows-none bg-gray-500 text-white p-2">
                    <p className="col-start-2 col-end-2 justify-self-center font-bold">
                        LEARNINGS IN REACT AND OTHER LIBRARIES
                    </p>
                    <button className="col-start-3 col-end-3 justify-self-end mr-4 hover:scale-105"
                        onClick={() => setIsOpen(!isOpen)}>
                        <svg className="size-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </nav>

                <motion.section className="h-lvh bg-gray-500 absolute right-0 text-nowrap overflow-x-hidden"
                    initial={{ width: 0 }} animate={isOpen ? { width: 200, padding: 8 } : { width: 0, padding: 0 }} 
                    transition={{ type: 'spring', stiffness: 500, damping: 40, duration: .3}}>

                    <ul className="text-white font-bold flex flex-col gap-2 overflow-x-hidden">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tictactoe">TicTacToe</Link></li>
                        <li><Link to="/thinkinreact">Thinking in React</Link></li>
                        <li><Link to="/autoanimate">AutoAnimate</Link></li>
                        <li><Link to="/framermotion">FramerMotion</Link></li>
                    </ul>
                </motion.section>
            </div>
        </>
    )
}

export default Navbar

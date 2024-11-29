// import React from 'react'
import '../output.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-center p-2 bg-sky-800 text-white mb-8">
            <ul className="flex gap-8 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/tictactoe">TicTacToe</Link>
                <Link to="/thinkinreact">Thinking in React</Link>
            </ul>
        </nav>
    )
}

export default Navbar

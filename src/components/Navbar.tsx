// import React from 'react'
import '../output.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        // TODO: MAKE A NEW NAVBAR THAT WILL USE AUTO ANIMATE LIBRARY
        <nav className="grid justify-center p-2 bg-sky-800 text-white mb-8">
            <ul className="flex gap-8 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/tictactoe">TicTacToe</Link>
                <Link to="/thinkinreact">Thinking in React</Link>
                <Link to="/autoanimate">AutoAnimate</Link>
                <Link to="/framermotion">FramerMotion</Link>
            </ul>
        </nav>
    )
}

export default Navbar

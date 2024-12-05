import './App.css'
import './output.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TicTacToe from './TicTacToe'
import ThinkingInReact from './pages/ThinkingInReact'
import AutoAnimate from './pages/AutoAnimate'
import FramerMotion from './pages/FramerMotion'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/thinkinreact" element={<ThinkingInReact />} />
                <Route path="/autoanimate" element={<AutoAnimate />} />
                <Route path="/framermotion" element={<FramerMotion />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App

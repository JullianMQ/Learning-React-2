import './App.css'
import './output.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TicTacToe from './TicTacToe'
import ThinkingInReact from './pages/ThinkingInReact'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/thinkinreact" element={<ThinkingInReact />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App

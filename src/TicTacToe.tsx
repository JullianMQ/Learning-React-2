import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './TicTacToe/Board'
import './output.css'

createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <Board />
    </StrictMode>
)


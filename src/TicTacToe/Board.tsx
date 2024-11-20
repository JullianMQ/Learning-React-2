import React, { useState } from 'react'

function Square({ value, onSquareClick }: { value: string, onSquareClick: () => void }) {
    return (
        <button onClick={onSquareClick}
            className="border p-1 px-2 font-bold min-w-12 min-h-12">
            {value}
        </button>
    )
}

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]

    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index]
        if (squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }

    const isAllFilled = squares.filter(value => value !== "X" && value !== "O")
    if (isAllFilled.length === 0) {
        return "No winner"
    }

    return null
}

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(""))

    const handleClick = (index: number) => {
        if (squares[index] === "X" || squares[index] === "O" || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice()
        nextSquares[index] = xIsNext ? "X" : "O"
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
        console.log(squares)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = "Winner: " + winner
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    return (
        <>
            <div className="mt-8 ml-8 text-2xl font-bold">{status}</div>
            <div className="mt-8">
                <div className="flex mx-8">
                    <Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
                    <Square value={squares[1]} onSquareClick={() => { handleClick(1) }} />
                    <Square value={squares[2]} onSquareClick={() => { handleClick(2) }} />
                </div>
                <div className="flex mx-8">
                    <Square value={squares[3]} onSquareClick={() => { handleClick(3) }} />
                    <Square value={squares[4]} onSquareClick={() => { handleClick(4) }} />
                    <Square value={squares[5]} onSquareClick={() => { handleClick(5) }} />
                </div>
                <div className="flex mx-8">
                    <Square value={squares[6]} onSquareClick={() => { handleClick(6) }} />
                    <Square value={squares[7]} onSquareClick={() => { handleClick(7) }} />
                    <Square value={squares[8]} onSquareClick={() => { handleClick(8) }} />
                </div>
            </div>
        </>
    )
}




export default Board

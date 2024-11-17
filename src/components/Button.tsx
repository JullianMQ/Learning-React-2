// import React from 'react'
// import clsx from 'clsx'
import '../input.css'
import '../output.css'

type ButtonProps = {
    onClick: () => void
    name: string
    color?: "green" | "red" | "blue"
}

const Button = ({ onClick, name = "Change me", color = "green" }: ButtonProps) => {

    const colorList = {
        blue: 'border-blue-900 bg-blue-700 hover:bg-blue-600',
        green: 'border-green-900 bg-green-700 hover:bg-green-600',
        red: 'border-red-900 bg-red-700 hover:bg-red-600'
    }

    return (
        <button onClick={onClick}
            className={`rounded border-2 active:scale-95 p-1 text-white ${colorList[color]}` }>
            {name}
        </button>
    )
}

export default Button

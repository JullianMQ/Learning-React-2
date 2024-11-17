import React from 'react'

type ButtonProps = {
    onClick: () => void
    name: string
    color?: string
    borderColor?: string
}

const Button = ({ onClick, name = "Change me", color ="green", borderColor = "green" } : ButtonProps) => {

    return (
        <button onClick={onClick} 
            className={`rounded border-2 border-${borderColor}-900 p-1 bg-${color}-700 text-white
            hover:bg-${color}-600 active:scale-95`}>
            {name}
        </button>
    )
}

export default Button

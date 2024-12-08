import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'motion/react'
import { useState } from 'react'

const FramerMotion = () => {

    return (
        <>
            <Navbar />
            <div className="pb-56">
                <div className="flex justify-center gap-32 mb-56 ">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">Animate x and y axis</h1>
                        <motion.div animate={{ x: -20, y: 20 }}
                            className='w-32 h-32 bg-red-500 rounded' />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">Animate Scaling</h1>
                        <motion.div animate={{ scale: 1.2, transition: { duration: 1 } }}
                            className='w-32 h-32 bg-red-500 rounded relative top-32' />
                    </div>
                </div>

                <AnimateOnceInView />
                <AnimateAlwaysInView />
                <ButtonDropdown />
                <Accordion />
            </div>
        </>
    )
}
// TODO: MAKE AN ACCORDION WITH FRAMER MOTION
// USE && AND useState like with autoanimation

const ButtonDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="mt-12 mx-auto w-screen max-w-4xl pb-20">
            <button className="bg-red-700 rounded p-2 text-white"
                onClick={handleClick}>
                Click me
            </button>
            <motion.div className="bg-green-500 rounded mt-12"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 100 : 0, padding: isOpen ? 5 : 0 }}
                transition={{ duration: .2 }}
            >
                {isOpen && <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet inventore ex, atque molestiae animi explicabo veritatis voluptates cum architecto quidem omnis minus iste, ab repudiandae maxime ad facere quod.
                </p>}
            </motion.div>
        </div>
    )
}

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.div className="border-black bg-gray-800 text-white max-w-[600px] mx-auto p-2 rounded
                cursor-pointer"
                animate={{ height: isOpen ? 150 : 40 }}
                onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between">
                    <p className="">Accordion here</p>
                    {isOpen ? <p className="text-xs align-text-bottom"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg> </p> :
                        <p className="text-xs align-text-bottom"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /> </svg> </p> }


                </div>
                {isOpen && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi commodi consequuntur, velit fugit saepe sequi placeat accusamus sunt blanditiis repellat deserunt voluptatibus! Nemo rem iure, dolorem numquam commodi non!</p>}
            </motion.div>
        </>
    )
}

const AnimateOnceInView = () => {
    return (
        <div className="h-[60svh] bg-green-200 p-8">
            <motion.h1 className="text-5xl font-bold"
                initial={{ opacity: 0, translateX: -500 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
            >
                Animate once in view
            </motion.h1>
        </div>
    )
}

const AnimateAlwaysInView = () => {
    return (
        <div className="h-[60svh] bg-red-200 p-8">
            <motion.h1 className="text-5xl font-bold"
                initial={{ opacity: 0, translateX: -500 }}
                whileInView={{ opacity: 1, translateX: 0 }}
            >
                Animate always in view
            </motion.h1>
        </div>
    )
}


export default FramerMotion

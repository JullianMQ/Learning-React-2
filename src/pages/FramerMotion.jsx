import React from 'react'
import Navbar from '../components/Navbar'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useState } from 'react'

const FramerMotion = () => {

    return (
        <>
            <Navbar />
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
            <Accordion />
        </>
    )
}
// TODO: MAKE AN ACCORDION WITH FRAMER MOTION
// USE && AND useState like with autoanimation

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="mt-12 mx-auto w-screen max-w-4xl pb-96">
            <button className="bg-red-700 rounded p-2 text-white"
                onClick={handleClick}>
                Click me
            </button>
            <motion.div className="bg-green-500 rounded mt-12" 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 100: 0, padding: isOpen ? 5: 0 }}
            transition={{ duration: .2 }}
            >
                {isOpen && <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet inventore ex, atque molestiae animi explicabo veritatis voluptates cum architecto quidem omnis minus iste, ab repudiandae maxime ad facere quod.
                </p>}
            </motion.div>
        </div>
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

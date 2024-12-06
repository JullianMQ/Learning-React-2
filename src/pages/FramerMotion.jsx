import React from 'react'
import Navbar from '../components/Navbar'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

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

            <div className="h-[60svh] bg-green-200 p-8">
                <motion.h1 className="text-5xl font-bold"
                    initial={{opacity: 0, translateX: -500}}
                    whileInView={{opacity: 1, translateX: 0}}
                    viewport={{ once: true }}
                >
                    Animate once in view
                </motion.h1>
            </div>
            <div className="h-[60svh] bg-red-200 p-8">
                <motion.h1 className="text-5xl font-bold"
                    initial={{opacity: 0, translateX: -500}}
                    whileInView={{opacity: 1, translateX: 0}}
                >
                    Animate always in view
                </motion.h1>
            </div>

        </>
    )
}


export default FramerMotion

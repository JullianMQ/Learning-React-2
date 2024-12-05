import React from 'react'
import Navbar from '../components/Navbar'
import { motion, useTransform, useInstantTransition } from 'motion/react'

const FramerMotion = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center gap-32">
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
            <div className="w-screen">
                <h1 className="text-3xl font-bold">Use scroll</h1>
                <motion.div className='w-64 h-32 bg-slate-200 rounded relative top-32 p-2'
                    initial={{ translateX: 0, opacity: 0 }}
                    whileInView={{ translateX: '50%', opacity: 1 }} >
                    <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolore aliquam ipsa velit molestias eveniet iusto. </p>
                </motion.div>

            </div>
        </>
    )
}

export default FramerMotion
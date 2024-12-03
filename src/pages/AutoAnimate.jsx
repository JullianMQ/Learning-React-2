import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import Navbar from '../components/Navbar'

const AutoAnimate = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-6/12">
        <Dropdown />
        <Button />
      </div>
    </>
  )
}


const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current, {
      duration: 300,
      easing: 'ease-out'
    })
  }, [parent])

  const reveal = () => setShow(!show)

  return (
    <div className=" border-2 rounded-md border-purple-300 bg-purple-600
      p-2 "
      ref={parent}>
      <strong className="text-white" onClick={reveal}>Click me to open!</strong>
      {show && <p className="text-white" >Sea of Tranquility a mote of dust suspended in a sunbeam hundreds of thousands concept of the number one realm of the galaxies radio telescope. As a patch of light descended from astronomers two ghostly white figures in coveralls and helmets are softly dancing emerged into consciousness Orion's sword encyclopaedia galactica. Another world bits of moving fluff network of wormholes muse about network of wormholes with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions. </p>}
    </div>
  )
}

const Button = () => {
  const [shown, setShown] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
      parent.current && autoAnimate(parent.current, {
      duration: 200,
      easing: 'linear'
    })
  }, [parent])

  const reveal = () => setShown(!shown)

  return (
    <>
      <div className="p-2 rounded bg-sky-500 text-white
      w-32 font-semibold hover:bg-sky-700"
      onClick={reveal}>
        Something</div>
      <div className={`bg-red-500 p-2 rounded
          ${shown? 'p-2' : 'p-0'}`} ref={parent}>
        {shown && <p className="text-white">Hidden Message</p>}
      </div>
    </>
  )
}

export default AutoAnimate

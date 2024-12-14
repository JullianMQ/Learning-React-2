// Why it's essential: Helps manage and share state globally across components without prop drilling.
// How to use it for your movie website:
//
//    Create a context to store movie data (watched/to-watch lists) and provide it to components.
//    This is especially useful if your app has multiple components accessing or updating the same movie list.
//  INFO: useContext is used to make components be able to access data that 
//  otherwise need to be pass as props
//  NOTE: it is used to avoid 'prop drilling'

import React, { useState } from 'react'
import Animal from './Animal'
import { AnimalContext } from './AnimalContext'

export type AnimalType = {
  animalType: "dog" | "cat" | "fish",
  name: string,
}

// Using useState without changing the value
const UseContext = () => {
  const [myDog] = useState<AnimalType>({
    animalType: "dog",
    name: "jerry"
  })

  // Do not forget to add the method provider this will make it possible
  // to use kinda like a react component
  return (
    <div>
      <AnimalContext.Provider value={myDog}>
        <Animal />
      </AnimalContext.Provider>
    </div>
  )
}

export default UseContext

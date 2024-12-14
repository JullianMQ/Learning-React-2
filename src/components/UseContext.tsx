// Why it's essential: Helps manage and share state globally across components without prop drilling.
// How to use it for your movie website:
//
//    Create a context to store movie data (watched/to-watch lists) and provide it to components.
//    This is especially useful if your app has multiple components accessing or updating the same movie list.
//  INFO: useContext is used to make components be able to access data that 
//  otherwise need to be pass as props
//  NOTE: it is used to avoid 'prop drilling'

import React from 'react'

const UseContext = () => {
  return (
    <div>UseContext</div>
  )
}

export default UseContext

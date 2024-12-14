import { useAnimalContext } from './AnimalContext'

const Dog = () => {
  const myDog = useAnimalContext()

  return (
    <div>
      <h1> Dog type: {myDog.animalType} </h1> 
      <h1> Dog name: {myDog.name} </h1> 
      {/*
        Could be typed like this but this will lead to errors down the road
        If a developer forgets to use the appropriate context
        <h1> Dog name: {myDog?.name} </h1> 
      */}
    </div>
  )
}

export default Dog

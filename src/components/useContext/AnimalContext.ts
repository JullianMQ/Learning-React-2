import { createContext, useContext } from "react";
import { AnimalType } from "./UseContext";

// This should be named the way a component would be
// It is necessary for this to be union typed with undefined in case a new dev
// joins and forgets to use the context
export const AnimalContext = createContext<AnimalType | undefined>(undefined)

// Custom hook in order to get AnimalType without undefined
// Will be used instead of useContext on the Dog component
export function useAnimalContext() {
    const myDog = useContext(AnimalContext)

    if (myDog === undefined) {
        throw new Error("useAnimalContext must be used within a AnimalContext.Provider");
    }

    return myDog
}

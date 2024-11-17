import './App.css'
import './output.css'
import ProductsList from './components/ProductsList'
import UseState from './components/UseState'

function App() {


    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsList />
            <UseState />
            <UseState />
        </div>
    )
}

export default App

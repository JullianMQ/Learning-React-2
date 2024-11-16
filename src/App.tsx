import './App.css'
import './output.css'

function App() {
    const products = [
        { id: 1, name: 'Apple', isFruit: true },
        { id: 2, name: 'Garlic', isFruit: false },
        { id: 3, name: 'Cabbage', isFruit: false },
    ]

    const listItems = products.map(product => (
        <li key={product.id}
            className={`text-lg ${product.isFruit ? 'text-red-700' : 'text-emerald-900'}`}
            style={
                {
                    // color: product.isFruit ? 'red' : 'green',
                    // backgroundColor: product.isFruit ? 'green' : 'aqua'
                }
            }>
            {product.name}
        </li>
    ))

    return (
        <ul>{listItems}</ul>
    )
}

export default App

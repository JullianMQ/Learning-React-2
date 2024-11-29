// import React from 'react'

const ProductsList = () => {
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
            {product.name} {product.isFruit ? 'is a Fruit' : 'is not a Fruit'}
        </li>
    ))


    return (
        <div>
            <h1 className="text-3xl font-bold text-red-700">Conditional Styling</h1>
            <h2 className="text-xl font-bold text-blue-500 uppercase">Products List</h2>
            <ul>{listItems}</ul>
        </div>
    )
}

export default ProductsList

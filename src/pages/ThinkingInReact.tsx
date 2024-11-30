import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const ThinkingInReact = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCheck = () => {
    setIsHidden(prevState => !prevState)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <>
      <Navbar />
      <FilterableProductTable
        SearchBar={<SearchBar
          handleCheck={handleCheck}
          handleSearch={handleSearch}
        />}
        ProductTable={<ProductTable
          children={<ProductRow
            isHidden={isHidden}
            searchQuery={searchQuery}
          />}
        />}
      />
    </>
  )
}

type FilterableProductTableProps = {
  SearchBar: React.ReactNode,
  ProductTable?: React.ReactNode,
}

const FilterableProductTable = ({ SearchBar, ProductTable }: FilterableProductTableProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {SearchBar}
        {ProductTable}
      </div>
    </div>
  )
}

type SearchBarProps = {
  handleCheck: () => void,
  handleSearch: (query: string) => void,
}

const SearchBar = ({ handleCheck, handleSearch }: SearchBarProps) => {
  return (
    <div className="flex flex-col mt-8">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-black rounded-md p-2"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
      <label htmlFor="showProds">
        <input id="showProds" type="checkbox"
          onChange={handleCheck}
          className="mr-2" />
        Only show products in stock
      </label>
    </div>
  )
}

type ProductTableProps = {
  children: React.ReactNode,
}

const ProductTable = ({ children }: ProductTableProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="font-bold mt-8">Name</p>
        <p className="font-bold mt-8">Price</p>
      </div>
      {children}
    </div>
  )
}

const ProductRow = ({ isHidden, searchQuery }: { isHidden: boolean, searchQuery: string }) => {
  const productCategory = new Set(products.map(value => value.category))

  return (
    <>
      {([...productCategory].map(category =>
        <div key={category}
          className="flex flex-col justify-between font-bold mt-6">
          <p className="flex justify-center">
            {category}
          </p>

          <ul className="flex flex-col">
            {products.filter(item => item.category === category)
              .map(item =>
                <li key={item.name}
                  className={` flex justify-between font-normal
                  ${item.stocked ? 'text-black' : 'text-red-500'} 
                  ${item.stocked ? 'flex' : isHidden ? 'hidden' : 'flex'}
                  ${item.name.toLowerCase().includes(searchQuery) ? 'flex' : 'hidden'} `}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              )}
          </ul>

        </div>
      ))}
    </>
  )
}

export default ThinkingInReact

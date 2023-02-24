// import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar.js'
import ProductCard from './components/ProductCard/ProductCard.js'
import productList from './components/ProductList.js'
import { useState } from 'react'

function App() {

  // Creating a state variable called filterValue and setting it to an empty string
  const [filterValue, setFilterValue] = useState('')

  // Creating a state variable called searchValue and setting it to an empty string
  const [searchValue, setSearchValue] = useState('')
  
  // Creating a function called filterProducts that will filter the productList based on the filterValue
  const filterProducts = () => {
    if (searchValue && filterValue) {
      return productList.filter((product) => product.productName.toLowerCase().includes(searchValue.toLowerCase()) && product.type === filterValue)
    } else if (searchValue) {
      return productList.filter((product) => product.productName.toLowerCase().includes(searchValue.toLowerCase()))
    } else if (filterValue) {
      return productList.filter((product) => product.type === filterValue)
    } else {
      return productList
    }
  }
  
  // Creating a function called handleFilterChange that will set the filterValue to the value of the select element
  const handleFilterChange = (event) => {
    if (event.target.id === 'filter-dropdown') {
      setFilterValue(event.target.value)
    } else if (event.target.id === 'search-bar') {
      setSearchValue(event.target.value)
    }
  } 

  // Returning the TopBar component and passing the handleFilterChange function as a prop
  return (
    <>
      <TopBar handleFilterChange={ handleFilterChange }/>
      <ProductCard productList={ filterProducts() }/>
    </>

  )
}

export default App;

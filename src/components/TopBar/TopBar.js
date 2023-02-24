import React from 'react'
import './topbar.css'
import productList from '../ProductList.js'


// Creating a functional component called TopBar and exporting it to be used in App.js
// The component is returning a section element with a label and select element
// The select element has an option element with the value of All
const TopBar = ({ handleFilterChange }) => {

  // Creating a variable called types and setting it to an array of unique types from the productList
  const types = [...new Set(productList.map((product) => product.type))]

  return (
    <>
      <section className='topBarContents'>
        <label htmlFor='filter-dropdown' className='label-for-filter'>Filter By</label>
        <select onChange={handleFilterChange} className='filter-dropdown' id='filter-dropdown' data-testid="filter-dropdown">
        <option data-testid="option" value=''>All</option>
            {types.map((type) => (
                <option key={type} value={type}>
                {type}
                </option>
            ))}
        </select>
      </section>
    </>
  )

}

export default TopBar
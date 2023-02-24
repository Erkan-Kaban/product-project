import React from 'react'
import './topbar.css'
import productList from '../ProductList.js'
import { TopBarContents } from './styled-components.js'


// Creating a functional component called TopBar and exporting it to be used in App.js
// The component is returning a section element with a label and select element
// The select element has an option element with the value of All
const TopBar = ({ handleFilterChange }) => {

  // Creating a variable called types and setting it to an array of unique types from the productList
  const types = [...new Set(productList.map((product) => product.type))]

  return (
    <>
      <TopBarContents>
        <div className='search-section'>
          <label className="search-bar-label" htmlFor='search-bar'>Search Beverage</label>
          <input onChange={handleFilterChange} type='text' className='search-bar' id='search-bar' data-testid="search-bar" />
        </div>
        <div className='filter-section'>
          <label htmlFor='filter-dropdown' className='label-for-filter'>Filter By</label>
          <select onChange={handleFilterChange} className='filter-dropdown' id='filter-dropdown' data-testid="filter-dropdown">
            <option data-testid="option" value=''>All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </TopBarContents>
    </>
  )

}

export default TopBar
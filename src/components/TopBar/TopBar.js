import React from 'react'
import './topbar.css'
import productList from '../ProductList.js'


// Creating a functional component called TopBar and exporting it to be used in App.js
// The component is returning a section element with a label and select element
// The select element has an option element with the value of All
const TopBar = () => {

  // Creating an empty array, used .forEach to iterate through the product list and 
  // Push the type of product into the array if it doesn't already exist
  const options = []
  productList.forEach(productType => {
    if (!options.includes(productType.type)) {
      options.push(productType.type)
    }
    return options
  })

  // Mapping through the options array and returning an option element for each item
  // Structured the code to be more readable and easier to understand
  return (
    <>
      <section className='topBarContents'>
        <label htmlFor='filter-dropdown' className='label-for-filter'>Filter By</label>
        <select className='filter-dropdown' id='filter-dropdown' data-testid="filter-dropdown">
         {options.map((option, index) => {
            return (
              <option data-testid="option" key={index}>{option}</option>
            )
         })}
          <option data-testid="option-all" defaultValue='selected'>All</option>
        </select>
      </section>
    </>
  )

}

export default TopBar
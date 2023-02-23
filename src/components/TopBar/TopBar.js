import React from 'react'
import './topbar.css'

const TopBar = () => {
  return (
    <>
    <section className='topBarContents'>
      <label className='label-for-filter'>Filter By</label>
      <select className='filter-dropdown'>
        <option>Hello</option>
        <option>me</option>
      </select>
    </section>
    </>
  )
  
}

export default TopBar
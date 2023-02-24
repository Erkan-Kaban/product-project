import React from 'react'
import productList from '../ProductList.js'
import './productcard.css'

const ProductCard = () => {

    return (
        <div className='product-card-container'>
            {/* <div className='product-card'> */}
                {productList.map((product, index) => {
                    return (
                    <div className='product-card'>
                        <div className='product-card-item' key={index}>
                            <img className='product-image' src={product.productImage} alt={product.name}></img>
                            <p>{product.productName}</p>
                            <p>{product.price}</p>
                            <p>{product.type}</p>
                            <p>{product.isSale}</p>
                        </div>
                    </div>    
                    )
                })}
            {/* </div> */}
        </div>
    )
}

export default ProductCard
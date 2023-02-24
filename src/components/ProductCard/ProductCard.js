import React from 'react'
import productList from '../ProductList.js'
import './productcard.css'

const ProductCard = () => {
    return (
        <div className='product-card-container'>
            {productList.map((product, index) => {
                return (
                    <div className='product-card'>
                        <div className='product-card-item' key={index}>
                            <p className='for-sale-tag'>{product.isSale ? <p>On Sale!</p> : ''}</p>
                            <img className='product-image' src={product.productImage} alt={product.name}></img>
                            <p>{product.productName}</p>
                            <p>{product.price}</p>
                            <p>{product.type}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
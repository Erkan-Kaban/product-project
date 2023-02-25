import React from 'react'
import './productcard.css'

// ProductCard receives the filterProducts function as a prop
// and returns a filtered display for the user depends on th selection
// They have made in the drop-down and the keyword search.

// Added alt text to images to describe the content of the image
const ProductCard = ( { productList } ) => {
    return (
        <div className='product-card-container'>
            {productList.map((product, index) => {
                return (
                    <div className='product-card' key={index}>
                        <div className='product-card-contents'>
                            <p>{product.isSale ? <span className='for-sale-tag'>On Sale!</span> : ''}</p>
                            <img className='product-image' src={product.productImage} alt={product.name}></img>
                            <p>{product.productName}</p>
                            <p><b>{product.price}</b></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
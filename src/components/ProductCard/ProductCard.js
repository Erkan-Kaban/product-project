import React from 'react'
import './productcard.css'

const ProductCard = ( { productList }) => {

    return (
        <div className='product-card-container'>
            {productList.map((product, index) => {
                return (
                    <div className='product-card' key={index}>
                        <div className='product-card-item'>
                            <p>{product.isSale ? <span className='for-sale-tag'>On Sale!</span> : ''}</p>
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
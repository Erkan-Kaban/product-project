import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../components/ProductCard/ProductCard.js';
import '@testing-library/jest-dom'

// Sending a dummy product list to the ProductCard component
describe('ProductCard Component', () => {
  const productList = [
    { isSale: true, productImage: 'image1.jpg', productName: 'Product 1', price: 10, alt: 'Product 1' },
    { isSale: false, productImage: 'image2.jpg', productName: 'Product 2', price: 20 },
    { isSale: true, productImage: 'image3.jpg', productName: 'Product 3', price: 30 },
  ];

  it('renders without crashing', () => {
    render(<ProductCard productList={productList} />);
  });

  it('displays the correct number of product list items in productList', () => {
    const { container } = render(<ProductCard productList={productList} />);
    expect(container.querySelectorAll('.product-card')).toHaveLength(3);
  });

  it('displays the number of products that are for sale, in the product list we have two', () => {
    const { container } = render(<ProductCard productList={productList} />);
    expect(container.querySelectorAll('.for-sale-tag')).toHaveLength(2);
  });

  it('displays the correct product information', () => {
    const { container } = render(<ProductCard productList={productList} />);
    expect(container.querySelectorAll('p')[0].textContent).toEqual('On Sale!');
    expect(container.querySelectorAll('p')[1].textContent).toEqual('Product 1');
    expect(container.querySelectorAll('b')[1].textContent).toEqual('20');
  });
});
import React from 'react';
import { screen, render } from '@testing-library/react';

import MyComponent from "../components/MyComponent"

test('renders the component', () => {
    render(<MyComponent />);
    const textElement = screen.getByText('Hello, world!');
    // const textElement = getByText('Hello, world!');
    // const container = document.querySelector('div');
   
    expect(textElement).toBeInTheDocument();
  });
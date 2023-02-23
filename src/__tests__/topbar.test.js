import React from 'react';
import { render, screen } from '@testing-library/react';
import TopBar from '../components/TopBar/TopBar';
import '@testing-library/jest-dom'


// Test to check if the label "Filter By" is rendered
describe('TopBar', () => {
  it('renders the label "Filter By"', () => {
    render(<TopBar />);
    const labelElement = screen.getByText('Filter By');
    expect(labelElement).toBeInTheDocument();
  });

  // Test to check if the select element is rendered
  it('renders a select element', () => {
    render(<TopBar />);
    const select = screen.getByTestId('filter-dropdown');
    expect(select).toBeInTheDocument();
  });

  // Test to check if the option element is rendered
  it('renders an option element for each product type', () => {
    render(<TopBar />);
    screen.getByTestId('filter-dropdown');
    const options = screen.getAllByTestId('option');
    expect(options.length).toEqual(4); // Assuming there are 4 different types of products
  });

  it('renders an option element with the value of "All"', () => {
    render(<TopBar />);
    const selectElement = screen.getByTestId('filter-dropdown');
    const allOptionElement = screen.getByTestId('option-all');
    expect(allOptionElement).toBeInTheDocument();
    expect(allOptionElement.value).toEqual('All');
  });
});
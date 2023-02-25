import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js';
import '@testing-library/jest-dom'
import { act } from 'react-test-renderer';

// Test to check if the label "Filter By" is rendered
describe('Testing App Component', () => {
    it('renders TopBar component', () => {
        render(<App />);
        const topBar = screen.getByRole('textbox');
        expect(topBar).toBeInTheDocument();
    });

    // Test to check if the select element is rendered
    it('Checks if the drop down box Beer is inside the DOM', async () => {
        render(<App />);
        const filterDropdown = screen.getByRole('combobox', { name: 'Filter By' });
        await act (() => {
            const productName = screen.getByText('Beer');
            userEvent.selectOptions(filterDropdown, 'Beer');
            expect(productName).toBeInTheDocument();
        });
    });

    // Test to check if the textbox element is rendered correctly and working
    it('testing to see if app is filtering products by search term', async () => {
        render(<App />);
        const searchBar = screen.getByRole('textbox', { name: 'Search Beverage' });
        await act(() => {
            userEvent.type(searchBar, 'Victoria Bitter 4x6x375ml');
            const productName = screen.getByText('Victoria Bitter 4x6x375ml');
            expect(productName).toBeInTheDocument();
        });
    });
});
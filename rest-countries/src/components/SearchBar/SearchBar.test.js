import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  test('renders correctly with CSS classes', () => {
    const { getByTestId } = render(<SearchBar />);
    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveClass('wrapper');
    expect(searchBar.querySelector('form')).toHaveClass('search');
  });

  test('initial state', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputField = getByPlaceholderText('Search for a country...');

    expect(inputField.value).toBe('');
  });

  test('form submission', () => {
    const onSearchChange = jest.fn();
    const { getByTestId } = render(<SearchBar onSearchChange={onSearchChange} />);
    const searchBar = getByTestId('search-bar');
    const form = searchBar.querySelector('form');

    fireEvent.submit(form);

    expect(onSearchChange).toHaveBeenCalled();
  });

});
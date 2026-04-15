import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    // Render
    render(<SearchBar />);
    
    // Input vinden
    const input = screen.getByPlaceholderText('Zoek...');
    
    // Typen
    fireEvent.change(input, { target: { value: 'React' } });
    
    // Check value
    expect(input.value).toBe('React');
  });

  test('toont zoekterm onder de input', () => {
    // Render
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Zoek...');
    
    // Typen
    fireEvent.change(input, { target: { value: 'Jest' } });
    
    // Check tekst
    expect(screen.getByText('Zoeken naar: Jest')).toBeInTheDocument();
  });

  test('toont wissen button als er tekst is', () => {
    // Render
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Zoek...');
    
    // Typen
    fireEvent.change(input, { target: { value: 'Test' } });
    
    // Check button
    expect(screen.getByText('Wissen')).toBeInTheDocument();
  });

  test('wissen button maakt input leeg', () => {
    // Render
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Zoek...');
    
    // Typen
    fireEvent.change(input, { target: { value: 'React' } });
    
    const button = screen.getByText('Wissen');
    
    // Klik wissen
    fireEvent.click(button);
    
    // Check leeg
    expect(input.value).toBe('');
  });

});
import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('LikeButton', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont initiële aantal likes', () => {
    render(<LikeButton initialLikes={5} />);
    expect(screen.getByText('5 likes')).toBeInTheDocument();
  });

  test('verhoogt likes bij klik', () => {
    // Render
    render(<LikeButton initialLikes={0} />);
    
    // Button vinden
    const button = screen.getByRole('button');
    
    // Klikken
    fireEvent.click(button);
    
    // Check
    expect(screen.getByText('1 likes')).toBeInTheDocument();
  });

  test('verlaagt likes bij tweede klik', () => {
    // Render
    render(<LikeButton initialLikes={0} />);
    
    // Button vinden
    const button = screen.getByRole('button');
    
    // 2x klikken
    fireEvent.click(button);
    fireEvent.click(button);
    
    // Check
    expect(screen.getByText('0 likes')).toBeInTheDocument();
  });

  test('toont rood hartje als geliked', () => {
    // Render
    render(<LikeButton initialLikes={0} />);
    
    // Button vinden
    const button = screen.getByRole('button');
    
    // Klikken
    fireEvent.click(button);
    
    // Check (emoji + tekst)
    expect(screen.getByText(/❤️ Like/)).toBeInTheDocument();
  });

});
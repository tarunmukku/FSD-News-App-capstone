import Footer from '../Components/footer/Footer';
import React from 'react';
import { render, screen } from '@testing-library/react';

it('renders welcome message', () => {
  render(<Footer />);
  expect(screen.getByText('News Portal')).toBeInTheDocument();
});
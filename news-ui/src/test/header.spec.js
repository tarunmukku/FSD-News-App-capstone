import Header from '../Components/header/Header';
// please add your test cases here
import React from 'react';
import { render, screen } from '@testing-library/react';

it('Verify news portal Heading is displayed', () => {
    render(<Header />);
    expect(screen.getByText('News Portal')).toBeInTheDocument();
  });

  it('Verify button has correct label', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Read Now/i })).toBeInTheDocument();
  });  
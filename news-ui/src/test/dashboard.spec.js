import Dashboard from '../Components/dashboard/Dashboard';
// please add your test cases here
import React from 'react';
import { render, screen } from '@testing-library/react';


it('Verify the dashboard DOM', () => {
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toHaveClass('container-fluid container')
  });

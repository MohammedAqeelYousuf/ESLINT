import React from 'react';
import { render, screen } from '@testing-library/react';
import GoalTracker from './GoalTracker';

test('renders goal progress heading', () => {
  render(<GoalTracker />);
  expect(screen.getByText(/Goal Progress/i)).toBeInTheDocument();
});

test('renders progress bar element', () => {
  render(<GoalTracker />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkoutHistory from './WorkoutHistory';

test('renders Workout History heading', () => {
  render(<WorkoutHistory />);
  expect(screen.getByText(/Workout History/i)).toBeInTheDocument();
});

test('renders list element even if no workouts', () => {
  render(<WorkoutHistory />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

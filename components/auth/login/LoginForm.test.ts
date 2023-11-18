import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginForm';

test('submit form with valid data', async () => {
  // Render the component
  act(() => {
    // render(<LoginPage/>);
  });

  // Fill in email and password
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');

  act(() => {
    fireEvent.change(emailInput, {
      target: { value: 'merajbighamian@gmail.com' },
    });
    fireEvent.change(passwordInput, { target: { value: '12345' } });
  });

  // Trigger form submission
  act(() => {
    fireEvent.submit(screen.getByText('Submit'));
  });

  // Wait for form submission to complete
  await waitFor(() => {
    // Assuming your success message is displayed after form submission
    // Modify this based on your actual success condition
    const successMessage = screen.getByText('Form data sent successfully!');
    expect(successMessage).toBeInTheDocument();
  });
});

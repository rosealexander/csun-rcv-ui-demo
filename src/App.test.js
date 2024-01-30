import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});


test('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from '../App';
import CallApi from '../CallApi';

test('renders learn react link', () => {
  render(<CallApi />);
  const linkElement = screen.getByText(/Name/i);
//   const tagElement = tagElement.getByTag(/td/i);
  expect(linkElement).toBeInTheDocument();
});

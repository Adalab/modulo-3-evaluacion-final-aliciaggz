import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('Harry Potter App', () => {
  it('should show a list of characters from the API', () => {
    window.fetch.mockResolvedValueOnce({ ok: true });
  });
  render(<App />);
  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(window.fetch).toHaveBeenCalledWith(
    'https://hp-api.onrender.com/api/characters/house'
  );
});

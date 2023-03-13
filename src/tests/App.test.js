import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('Harry Potter App', () => {
  it('should show a list of characters from the API', async () => {
    window.fetch.mockResolvedValueOnce({ ok: true });
  });
  render(<App />);
  expect(window.fetch).toHaveBeenCalledTimes(2);
  expect(window.fetch).toHaveBeenCalledWith(
    'https://hp-api.onrender.com/api/characters/house/gryffindor'
  );
});

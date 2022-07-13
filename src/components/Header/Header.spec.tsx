import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should display a title', async () => {
    render(<Header />);
    const title = await screen.findByRole('heading', { name: 'Cypress Component Testing' });
    expect(title.textContent).toContain('Cypress Component Testing');
  });
});

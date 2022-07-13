import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('mounts', () => {
    render(<Counter />);
  });

  it('should default to 0', async () => {
    render(<Counter />);
    const value = await screen.findByTestId('counter');
    expect(value.textContent).toContain('0');
  });

  it('should set a default value via a prop', async () => {
    render(<Counter initialValue={200} />);
    const value = await screen.findByTestId('counter');
    expect(value.textContent).toContain('200');
  });

  it('should increment the count', async () => {
    render(<Counter />);
    const button = await screen.findByRole('button', { name: '+' });
    const value = await screen.findByTestId('counter');
    fireEvent.click(button);
    expect(value.textContent).toContain('1');
  });

  it('should decrement the count', async () => {
    render(<Counter />);
    const button = await screen.findByRole('button', { name: '-' });
    const value = await screen.findByTestId('counter');
    fireEvent.click(button);
    expect(value.textContent).toContain('-1');
  });
});

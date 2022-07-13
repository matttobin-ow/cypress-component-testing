import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';

const onRemoveSpy = jest.fn();

describe('CartItem', () => {
  beforeEach(() => {
    render(<CartItem id={1} name="Chocolate Bar" quantity={2} onRemove={onRemoveSpy} />);
  });

  // Test component UI
  it('displays item name and quantity from props', async () => {
    const itemName = await screen.findByTestId('item-name');
    const quantity = await screen.findByTestId('quantity');
    expect(itemName.textContent).toContain('Chocolate Bar');
    expect(quantity.textContent).toContain('2');
  });

  it('displays a remove button', async () => {
    const button = await screen.findByRole('button', { name: 'Remove' });
    expect(button).toBeInTheDocument();
  });

  // Test component API
  it('should fire an event when an item is remove from the cart', async () => {
    const button = await screen.findByRole('button', { name: 'Remove' });
    fireEvent.click(button);
    expect(onRemoveSpy).toHaveBeenCalledWith(1);
  });
});

import { render, screen, fireEvent, within } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Cart from './Cart';

describe('Cart', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Cart />
      </RecoilRoot>
    );
  });

  it('should display 3 items in the cart', async () => {
    const items = await screen.findAllByTestId('cart-item');
    expect(items).toHaveLength(3);
  });

  it('should remove an item from the cart and display 2 items in the cart', async () => {
    let items = await screen.findAllByTestId('cart-item');
    const button = await within(items[1]).findByRole('button', { name: 'Remove' });

    await fireEvent.click(button);

    const sandwich = await screen.queryByText('Sandwich');
    items = await screen.findAllByTestId('cart-item');

    expect(sandwich).toBeNull();
    expect(items).toHaveLength(2);
  });
});

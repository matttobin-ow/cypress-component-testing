import { atom } from 'recoil';
import ICartItem from '../types/cart-item';

export const cartAtom = atom<ICartItem[]>({
  key: 'cartAtom',
  default: [
    {
      id: 1,
      name: 'Chocolate Bar',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Sandwich',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Drink',
      quantity: 1,
    },
  ],
});

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import Cart from './Cart';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Component Testing/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = () => (
  <RecoilRoot>
    <Cart />
  </RecoilRoot>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getAllByTestId('cart-item')).toHaveLength(3);
};

export const RemoveItem = Template.bind({});

RemoveItem.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getAllByRole('button', { name: 'Remove' })[1]);

  await expect(canvas.getAllByTestId('cart-item')).toHaveLength(2);
};

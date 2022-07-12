import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItem from './CartItem';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Component Testing/Cart Item',
  component: CartItem,
  argTypes: { onRemove: { action: 'Removed' } },
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 1,
  name: 'Chocolate Bar',
  quantity: 2,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Chocolate Bar')).toBeInTheDocument();
  await expect(canvas.getByText('2')).toBeInTheDocument();
  await expect(canvas.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
};

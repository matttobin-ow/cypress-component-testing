import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: 'Component Testing/Cart Item',
  component: CartItem,
  argTypes: { onRemove: { action: 'Removed' } },
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  itemId: 1,
  itemName: 'Chocolate Bar',
  quantity: 2,
};

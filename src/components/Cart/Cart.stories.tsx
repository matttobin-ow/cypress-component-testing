import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import Cart from './Cart';

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

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from './Counter';

export default {
  title: 'Component Testing/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Component Testing/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Cypress Component Testing')).toBeInTheDocument();
};

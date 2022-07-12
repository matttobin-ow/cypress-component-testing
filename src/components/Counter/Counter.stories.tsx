import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from './Counter';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Component Testing/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});

export const DisplayZeroByDefault = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('0')).toBeInTheDocument();
  },
};

export const IncrementCount = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    await expect(canvas.getByText('1')).toBeInTheDocument();
  },
};

export const DecrementCount = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: '-' }));
    await expect(canvas.getByText('-1')).toBeInTheDocument();
  },
};

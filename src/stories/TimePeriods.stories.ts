import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { TimePeriods } from '../components/TimePeriods/TimePeriods';

const meta = {
  title: 'Example/TimePeriods',
  component: TimePeriods,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: 'fullscreen',
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof TimePeriods>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

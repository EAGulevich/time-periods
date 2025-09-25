import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { RotarySwitch } from '../components/CircleSwitcher/RotarySwitch';
import { useEffect, useState } from 'react';

const InteractiveCircleSwitcher = (args: any) => {
  const [currentStepId, setCurrentStepId] = useState(args.currentStepId);

  useEffect(() => {
    setCurrentStepId(args.currentStepId);
  }, [args.currentStepId]);

  return (
    <RotarySwitch
      {...args}
      currentPoint={currentStepId}
      onChange={step => {
        setCurrentStepId(step.id);
        args.onChangeStep(step);
      }}
    />
  );
};

const meta = {
  title: 'TimePeriods/CircleSwitcher',
  component: InteractiveCircleSwitcher,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    currentPoint: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'], // ID шагов
    },
  },
} satisfies Meta<typeof RotarySwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    sizes: {
      circle: 530,
      closedDot: 6,
      openDot: 56,
      fontSize: 20,
    },
    currentStepId: '1',
    steps: [
      { id: '1', title: 'Литература' },
      { id: '2', title: 'Кино' },
      { id: '3', title: 'A' },
      { id: '4', title: 'Б' },
      { id: '5', title: 'В' },
      { id: '6', title: 'Г' },
    ],
  },
};

export const Custom: Story = {
  args: {
    sizes: {
      circle: 240,
      closedDot: 10,
      openDot: 28,
      fontSize: 14,
    },
    currentStepId: '1',
    steps: [
      { id: '1', title: 'Литература' },
      { id: '2', title: 'Кино' },
      { id: '3', title: 'A' },
    ],
  },
};

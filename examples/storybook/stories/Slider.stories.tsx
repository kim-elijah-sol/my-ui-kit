import type { Meta, StoryObj } from '@storybook/react';
import { Slider }              from '@ui-kit/ui';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
    },
    defaultValue: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    color: {
      control: 'select',
      options: ['black', 'blue'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const BlackColor: Story = {
  args: {
    defaultValue: 50,
    color: 'black',
  },
};

export const BlueColor: Story = {
  args: {
    defaultValue: 50,
    color: 'blue',
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: 25,
    min: 0,
    max: 50,
  },
};

export const WithStep: Story = {
  args: {
    defaultValue: 20,
    step: 10,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};

export const DisabledBlue: Story = {
  args: {
    defaultValue: 50,
    color: 'blue',
    disabled: true,
  },
};

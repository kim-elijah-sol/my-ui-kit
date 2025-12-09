import type { Meta, StoryObj } from '@storybook/react';
import { Radio }               from '@ui-kit/ui';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['black', 'blue'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const BlackColor: Story = {
  args: {
    color: 'black',
    defaultChecked: true,
  },
};

export const BlueColor: Story = {
  args: {
    color: 'blue',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

const RadioGroupTemplate = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Radio name="group" defaultChecked />
      Option 1
    </label>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Radio name="group" />
      Option 2
    </label>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Radio name="group" />
      Option 3
    </label>
  </div>
);

export const RadioGroup: Story = {
  render: RadioGroupTemplate,
  args: {},
};

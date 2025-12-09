import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox }            from '@ui-kit/ui';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

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

const CheckboxGroupTemplate = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox defaultChecked />
      Option 1
    </label>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox />
      Option 2
    </label>
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox />
      Option 3
    </label>
  </div>
);

export const CheckboxGroup: Story = {
  render: CheckboxGroupTemplate,
  args: {},
};

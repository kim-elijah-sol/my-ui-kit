import type { Meta, StoryObj } from '@storybook/react';
import { Input }               from '@ui-kit/ui';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'solid', 'bottom-border'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['black', 'blue'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Border: Story = {
  args: {
    placeholder: 'Border variant',
    variant: 'border',
  },
};

export const Solid: Story = {
  args: {
    placeholder: 'Solid variant',
    variant: 'solid',
  },
};

export const BottomBorder: Story = {
  args: {
    placeholder: 'Bottom border variant',
    variant: 'bottom-border',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg',
  },
};

export const BlackColor: Story = {
  args: {
    placeholder: 'Black color',
    color: 'black',
  },
};

export const BlueColor: Story = {
  args: {
    placeholder: 'Blue color',
    color: 'blue',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

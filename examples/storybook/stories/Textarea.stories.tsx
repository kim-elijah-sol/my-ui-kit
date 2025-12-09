import type { Meta, StoryObj } from '@storybook/react';
import { Textarea }            from '@ui-kit/ui';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'solid', 'bottom-border'],
    },
    color: {
      control: 'select',
      options: ['black', 'blue'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    rows: 4,
  },
};

export const Border: Story = {
  args: {
    placeholder: 'Border variant',
    variant: 'border',
    rows: 4,
  },
};

export const Solid: Story = {
  args: {
    placeholder: 'Solid variant',
    variant: 'solid',
    rows: 4,
  },
};

export const BottomBorder: Story = {
  args: {
    placeholder: 'Bottom border variant',
    variant: 'bottom-border',
    rows: 4,
  },
};

export const BlackColor: Story = {
  args: {
    placeholder: 'Black color',
    color: 'black',
    rows: 4,
  },
};

export const BlueColor: Story = {
  args: {
    placeholder: 'Blue color',
    color: 'blue',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    rows: 4,
  },
};

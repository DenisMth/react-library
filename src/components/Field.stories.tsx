import type { Meta, StoryObj } from '@storybook/react-vite';

import Field from './Field';

const meta = {
  component: Field,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    name: 'email',
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    type: 'email',
    defaultValue: 'test@mail.com',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    defaultValue: 'secret',
  },
};

export const WithPlaceholder: Story = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithError: Story = {
  args: {
    type: 'email',
    defaultValue: 'nope',
    error: 'Enter a valid email.',
  },
};

import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Form from './Form';
import Field from './Field';

const meta = {
  component: Form,
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
      <Form {...args}>
        <Field label="Email" name="email" type="email" defaultValue="test@mail.com" />
        <Field label="Password" name="password" type="password" defaultValue="secret" />
      </Form>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Default.render,
};

export const Submitting: Story = {
  args: {
    loading: true,
  },
  render: Default.render,
};

export const DangerAction: Story = {
  args: {
    submitVariant: 'danger',
    submitLabel: 'Delete account',
  },
  render: Default.render,
};

export const WithError: Story = {
  args: {
    error: 'Invalid email or password.',
  },
  render: Default.render,
};

export const WithHeader: Story = {
  args: {
    title: 'Sign in',
    description: 'Use your account credentials.',
  },
  render: Default.render,
};

export const WithCancel: Story = {
  args: {
    onCancel: fn(),
    cancelLabel: 'Cancel',
  },
  render: Default.render,
};

export const WithFieldError: Story = {
  render: (args) => (
      <Form {...args}>
        <Field
            label="Email"
            name="email"
            type="email"
            defaultValue="nope"
            error="Enter a valid email."
        />
        <Field label="Password" name="password" type="password" />
      </Form>
  ),
};

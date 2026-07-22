import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Form from './Form';

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
        <label>
          Email
          <input type="email" name="email" defaultValue="test@mail.com" />
        </label>
        <label>
          Password
          <input type="password" name="password" defaultValue="secret" />
        </label>
      </Form>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Default.render,
};
import type { Meta, StoryObj } from '@storybook/react-vite';

import Btn from './Btn';

const meta = {
    component: Btn,
} satisfies Meta<typeof Btn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'primary',
        btn: {
            onClick: () => console.log('Button clicked'),
            children: 'Click Me',
        },
    },
};

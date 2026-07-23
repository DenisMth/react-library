import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'primary',
        card: {
            onClick: () => console.log('Button clicked'),
            title: 'Test',
            subtitle: 'Test2',
            content: 'Wow ! Amazing content !',
            img: 'https://hips.hearstapps.com/hmg-prod/images/c33b2259-8c6b-4308-bc6f-5373d8a6600d.jpeg?crop=0.668xw:1.00xh;0.194xw,0&resize=640:*',
            buttonLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        btnText: 'More',
    },
};
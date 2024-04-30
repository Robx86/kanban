import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button/Button';
import { mockButtonProps } from '@/components/ui/Button/Button.mocks';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: mockButtonProps.base,
};

export const Destructive: Story = {
  args: mockButtonProps.destructive,
};

export const Secondary: Story = {
  args: mockButtonProps.secondary,
};


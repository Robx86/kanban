import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input/Input';
import { mockInputProps } from '@/components/ui/Input/Input.mocks';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: mockInputProps.base,
};

export const Error: Story = {
  args: mockInputProps.error,
};


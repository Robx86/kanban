import { Meta, StoryObj } from '@storybook/react';
import Subtask from '@/components/Subtask/Subtask';
import { mockSubtaskProps } from '@/components/Subtask/Subtask.mocks';

const meta: Meta<typeof Subtask> = {
  title: 'Design System/Subtask',
  component: Subtask,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Subtask>;

export const Base: Story = {
  args: mockSubtaskProps.base,
};

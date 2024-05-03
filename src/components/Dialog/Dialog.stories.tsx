import { Meta, StoryObj } from "@storybook/react";
import Dialog from "@/components/Dialog/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/CustomDialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  args: {
    title: "Delete this task?",
    description: "Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.",
    textCancel: "Cancel",
    textConfirm: "Delete",
    onCancel: () => {},
    onConfirm: () => {},
  },
};

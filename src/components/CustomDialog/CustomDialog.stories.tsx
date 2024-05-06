import { Meta, StoryObj } from "@storybook/react";
import CustomDialog from "@/components/CustomDialog/CustomDialog";

const meta: Meta<typeof CustomDialog> = {
  title: "Components/CustomDialog",
  component: CustomDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CustomDialog>;

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

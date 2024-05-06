import { Meta, StoryObj } from "@storybook/react";
import EditTask from "@/components/EditTask/EditTask";

const meta: Meta<typeof EditTask> = {
  title: "Design System/EditTask",
  component: EditTask,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditTask>;

export const Base: Story = {
  args: {
    modal: true,
    setModal: () => {},
  },
};

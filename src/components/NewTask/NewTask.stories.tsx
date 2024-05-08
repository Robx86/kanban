import { Meta, StoryObj } from "@storybook/react";
import NewTask from "@/components/NewTask/NewTask";

const meta: Meta<typeof NewTask> = {
  title: "Design System/NewTask",
  component: NewTask,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewTask>;

export const Base: Story = {
  args: {
    modal: true,
    setModal: () => {},
  },
};

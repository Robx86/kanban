import { Meta, StoryObj } from "@storybook/react";
import EditBoard from "@/components/EditBoard/EditBoard";

const meta: Meta<typeof EditBoard> = {
  title: "Design System/EditBoard",
  component: EditBoard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditBoard>;

export const Base: Story = {
  args: {
    modal: true,
    setModal: () => {},
  },
};

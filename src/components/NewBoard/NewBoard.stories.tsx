import { Meta, StoryObj } from "@storybook/react";
import NewBoard from "@/components/NewBoard/NewBoard";

const meta: Meta<typeof NewBoard> = {
  title: "Design System/NewBoard",
  component: NewBoard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewBoard>;

export const Base: Story = {
  args: {
    modal: true,
    setModal: () => {},
  },
};

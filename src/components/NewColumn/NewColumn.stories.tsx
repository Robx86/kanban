import { Meta, StoryObj } from "@storybook/react";
import NewColumn from "@/components/NewColumn/NewColumn";

const meta: Meta<typeof NewColumn> = {
  title: "Design System/NewColumn",
  component: NewColumn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewColumn>;

export const Base: Story = {
  args: {
    modal: true,
    setModal: () => {},
  },
};

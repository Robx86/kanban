import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";

const meta: Meta<typeof Select> = {
  title: "Design System/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Select",
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-96 border-input-border">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="todo">To Do</SelectItem>
        <SelectItem value="doing">Doing</SelectItem>
        <SelectItem value="done">Done</SelectItem>
      </SelectContent>
    </Select>
  ),
};

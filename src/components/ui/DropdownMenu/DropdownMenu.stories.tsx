import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/Input/Input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from "@/components/ui/DropdownMenu/DropdownMenu";

const meta: Meta<typeof Input> = {
  title: "Design System/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {
  args: {
    children: (
      <div className="flex flex-col">
        <DropdownMenuTrigger>
          <button className="btn">Open Dropdown</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    ),
  },
};

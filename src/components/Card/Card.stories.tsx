import { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/Card/Card";
import { mockCardProps } from "@/components/Card/Card.mocks";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: mockCardProps.base,
};
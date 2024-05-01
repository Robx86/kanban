import { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";
import Subtask from "@/components/Subtask/Subtask";

const meta: Meta<typeof Dialog> = {
  title: "Design System/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  render: () => (
    <Dialog open={true}>
      <DialogContent className="max-w-[480px]">
        <div>
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
            <div className="flex w-full flex-col">
              <span className="font-bold text-heading-lg">
                Research pricing points of various competitors and trial
                different business models
              </span>
              <span className="flex">
                <span className="text-body-text-secondary my-6 text-body-lg">
                  We know what we're planning to build for version one. Now we
                  need to finalise the first pricing model we'll use. Keep
                  iterating the subtasks until we have a coherent proposition.
                </span>
              </span>
              <span className="text-body-text-secondary text-body-md">
                Subtasks (2 of 3)
              </span>
              <div className="flex flex-col gap-2 mt-4 mb-6">
                <Subtask finished={false}>Research pricing points</Subtask>
                <Subtask finished={false}>
                  Outline a business model that works for our solution
                </Subtask>
                <Subtask finished={true}>
                  Talk to potential customers about our proposed solution and
                  ask for fair price expectancy
                </Subtask>
              </div>
              <span className="text-body-text-secondary text-body-md mb-2">
                Current Status
              </span>
            </div>
            <Select>
              <SelectTrigger className="w-full border-input-border">
                <SelectValue placeholder="To Do" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="doing">Doing</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

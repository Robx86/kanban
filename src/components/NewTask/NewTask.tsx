import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select/Select";
import { Label } from "@/components/ui/Label/Label";
import { Input } from "@/components/ui/Input/Input";
import { Textarea } from "@/components/ui/Textarea/Textarea";
import { Button } from "@/components/ui/Button/Button";
import CloseIcon from "@/assets/icons/close.svg";
import { Dispatch, SetStateAction } from "react";

interface NewTaskProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const NewTask = ({ modal, setModal }: NewTaskProps) => {
  return (
    <Dialog open={modal}>
      <DialogContent className="max-w-[480px]">
        <div>
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
            <div className="flex w-full flex-col">
              <div>
                <span className="font-bold text-heading-lg mb-6">
                  Add New Task
                </span>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <Label>Title</Label>
                  <Input
                    placeholder="e.g. Take coffee break"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="e.g. Take coffee break"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Subtasks</Label>
                  <div className="flex items-center">
                    <Input placeholder="e.g. Make coffee" className="mt-2" />
                    <img src={CloseIcon} className="w-4 h-4 ml-2 mt-2" />
                  </div>
                  <div className="flex items-center">
                    <Input
                      placeholder="e.g. Drink coffee & smile"
                      className="mt-2"
                    />
                    <img src={CloseIcon} className="w-4 h-4 ml-2 mt-2" />
                  </div>
                  <Button variant="secondary" className="w-full mt-3">
                    + Add New Subtask
                  </Button>
                </div>
                <div>
                  <Label>Status</Label>
                  <Select defaultValue="todo">
                    <SelectTrigger className="w-full border-input-border mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="doing">Doing</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Add Task
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default NewTask;

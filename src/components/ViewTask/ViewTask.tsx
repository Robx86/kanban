import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import Subtask from "../Subtask/Subtask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select/Select";
import { Dispatch, SetStateAction } from "react";
import { ViewTaskModal } from "../../App";

interface ViewTaskProps {
  modal: ViewTaskModal;
  setModal: Dispatch<SetStateAction<ViewTaskModal>>;
}

const ViewTask = ({modal, setModal} : ViewTaskProps) => {
  return (
    <Dialog open={modal.open} onOpenChange={() => setModal((prev) => {
      return {
        ...prev,
        open: !prev.open,
      };
    })}>
      <DialogContent className="max-w-[480px]">
        <div>
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
            <div className="flex w-full flex-col">
              <span className="font-bold text-heading-lg">
                {modal.task.name}
              </span>
              <span className="flex">
                <span className="text-body-text-secondary my-6 text-body-lg">
                  {modal.task.description}
                </span>
              </span>
              <span className="text-body-text-secondary text-body-md">
                Subtasks (2 of 3)
              </span>
              <div className="flex flex-col gap-2 mt-4 mb-6">
                {modal.task.subTasks.map((subTask, id) => (
                  <Subtask key={id} finished={subTask.isCompleted}>
                    {subTask.name}
                  </Subtask>
                ))}
              </div>
              <span className="text-body-text-secondary text-body-md mb-2">
                Current Status
              </span>
            </div>
            <Select defaultValue={modal.task.column}>
              <SelectTrigger className="w-full border-input-border">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="doing">Doing</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>{" "}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ViewTask;

import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import Subtask from "../Subtask/Subtask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select/Select";
import { Dispatch, SetStateAction, useState } from "react";
import { ViewTaskModal } from "../../App";
import PlusIcon from "@/assets/icons/plus.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu/DropdownMenu";
import CustomDialog from "@/components/CustomDialog/CustomDialog";


interface ViewTaskProps {
  modal: ViewTaskModal;
  setModal: Dispatch<SetStateAction<ViewTaskModal>>;
}

const ViewTask = ({ modal, setModal }: ViewTaskProps) => {
  const [DeleteBoard, setDeleteBoard] = useState(false);

  return (
    <>
      {" "}
      <Dialog
        open={modal.open}
        onOpenChange={() =>
          setModal((prev) => {
            return {
              ...prev,
              open: !prev.open,
            };
          })
        }
      >
        <DialogContent className="max-w-[480px]">
          <div>
            <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
              <div className="flex w-full flex-col">
                <div className="flex justify-between">
                  <span className="font-bold text-heading-lg">
                    {modal.task.name}
                  </span>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <img
                        src={PlusIcon}
                        alt="close"
                        className="cursor-pointer ml-6"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Editar Board</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setDeleteBoard(true);
                        }}
                      >
                        Deletar Board
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <span className="flex">
                  <span className="text-body-text-secondary my-6 text-body-lg">
                    {modal.task.description}
                  </span>
                </span>
                <span className="text-body-text-secondary text-body-md">
                  Subtasks (
                  {
                    modal.task.subTasks.filter((subTask) => subTask.isCompleted)
                      .length
                  }{" "}
                  of {modal.task.subTasks.length})
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
              </Select>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {DeleteBoard && (
        <CustomDialog
          title="Delete this task?"
          description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
          textCancel="Cancel"
          textConfirm="Delete"
          onCancel={() => setDeleteBoard(false)}
          onConfirm={() => {}}
        />
      )}
    </>
  );
};
export default ViewTask;

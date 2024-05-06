import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import { Label } from "@/components/ui/Label/Label";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import CloseIcon from "@/assets/icons/close.svg";
import { Dispatch, SetStateAction } from "react";

interface EditBoardProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const EditBoard = ({ modal, setModal }: EditBoardProps) => {
  return (
    <Dialog open={modal} onOpenChange={() => setModal(!modal)}>
      <DialogContent className="max-w-[480px]">
        <div>
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
            <div className="flex w-full flex-col">
              <div>
                <span className="font-bold text-heading-lg mb-6">
                  Edit Board
                </span>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="e.g. Web Design" className="mt-2" value='Platform Launch' />
                </div>

                <div>
                  <Label>Subtasks</Label>
                  <div className="flex items-center">
                    <Input placeholder="Todo" value="Todo" className="mt-2" />
                    <img
                      src={CloseIcon}
                      className="w-4 h-4 ml-2 mt-2 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center">
                    <Input placeholder="Doing" value="Doing" className="mt-2" />
                    <img
                      src={CloseIcon}
                      className="w-4 h-4 ml-2 mt-2 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center">
                    <Input placeholder="Done" value="Done" className="mt-2" />
                    <img
                      src={CloseIcon}
                      className="w-4 h-4 ml-2 mt-2 cursor-pointer"
                    />
                  </div>
                  <Button variant="secondary" className="w-full mt-3">
                    + Add New Column
                  </Button>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Create New Board
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default EditBoard;

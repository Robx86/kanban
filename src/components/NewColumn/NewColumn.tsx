import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";
import { Label } from "@/components/ui/Label/Label";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import { Dispatch, SetStateAction } from "react";

interface NewColumnProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;

}

const NewColumn = ({ modal, setModal }: NewColumnProps) => {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-[480px]">
        <div>
          <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white">
            <div className="flex w-full flex-col">
              <div>
                <span className="font-bold text-heading-lg mb-6">
                  Add New Column
                </span>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <Label>Column Name</Label>
                  <Input
                    placeholder="Code Review"
                    className="mt-2"
                  />
                </div>
                <Button className="w-full">Add Column</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default NewColumn;

import mockBoard from "@/lib/mocks/board.mocks";
import { useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import Card from "./components/Card/Card";
import ViewTask from "./components/ViewTask/ViewTask";
import { taskTypes } from "./lib/types/board.types";

export interface ViewTaskModal {
  open: boolean,
  task: taskTypes,
}

function App() {
  const [modal, setModal] = useState<ViewTaskModal>({
    open: false,
    task: {
      id: "",
      name: "",
      isCompleted: false,
      subTasks: [],
    },
  });
  console.log(modal, "modal");

  return (
    <div className="bg-background h-full pl-[0.5625rem]">
      {mockBoard.columns.length > 0 ? (
        <div className="flex h-full">
          {mockBoard.columns.map((column) => (
            <div key={column.id} className="w-72 rounded-md p-3">
              <div className="flex justify-between items-center mb-6 mt-3">
                <div className="text-heading-sm font-bold text-body-text-secondary tracking-[0.1rem] flex">
                  <div
                    className={`h-[15px] w-[0.9375rem] rounded-full mr-3`}
                    style={{ backgroundColor: column.color }}
                  />{" "}
                  {column.name} ({column.tasks.length})
                </div>
              </div>
              {column.tasks.length > 0 ? (
                <>
                  <div className="flex gap-5 flex-col">
                    {column.tasks.map((task, id) => (
                      <Card
                        title={task.name}
                        key={id}
                        todoSubTasks={
                          task.subTasks.filter(
                            (subTask) => !subTask.isCompleted
                          ).length
                        }
                        doneSubTasks={
                          task.subTasks.filter((subTask) => subTask.isCompleted)
                            .length
                        }
                        onHandleClick={() => setModal({
                          open: true,
                          task: task,
                        })}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-gray-500">
                  This column is empty. Create a new task to get started.
                </div>
              )}
            </div>
          ))}
          <div className="text-body-text-secondary font-bold flex justify-center items h-[50.875rem] w-[17.5rem] bg-[#E9EFFA] rounded-md items-center text-heading-xl mt-16 ml-3">
            + New Column
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 w-full h-full flex items-center justify-center flex-col">
          <div className="mb-8 text-heading-lg text-gray-500 font-bold">
            This board is empty. Create a new column to get started.
          </div>
          <Button>+ Add New Column</Button>
        </div>
      )}
      {modal && <ViewTask modal={modal} setModal={setModal} />}
    </div>
  );
}

export default App;

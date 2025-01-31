import mockBoard from "@/lib/mocks/board.mocks";
import { useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import Card from "./components/Card/Card";
import ViewTask from "./components/ViewTask/ViewTask";
import { taskTypes } from "./lib/types/board.types";
import NewColumn from "./components/NewColumn/NewColumn";
import { DndContext } from "@dnd-kit/core";

export interface ViewTaskModal {
  open: boolean;
  task: taskTypes;
}

function App() {
  const [modal, setModal] = useState<ViewTaskModal>({
    open: false,
    task: {
      id: "",
      name: "",
      isCompleted: false,
      subTasks: [],
      column: "",
    },
  });
  const [modalNewColumn, setModalNewColumn] = useState<boolean>(false);

  return (
    <div className="h-full pl-[0.5625rem]">
      {mockBoard[0].columns.length > 0 ? (
        <div className="flex h-full">
          {mockBoard[0].columns.map((column) => (
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
              {/* {column.tasks.length > 0 ? (
                <>
                  {column.tasks.map((task, id) => (
                    <div>{task.id}</div>
                  ))}
                </>
              ) : (
                <div className="text-gray-500">
                  This column is empty. Create a new task to get started.
                </div>
              )} */}
              {column.tasks.length > 0 ? (
                <>
                  <div className="flex gap-5 flex-col">
                    {column.tasks.map((task, id) => (
                      // <div>{task.id}</div>
                      <Card
                        title={task.name}
                        key={id}
                        doneSubTasks={
                          task.subTasks.filter((subTask) => subTask.isCompleted)
                            .length
                        }
                        SubTasks={task.subTasks.length}
                        onHandleClick={() =>
                          setModal({
                            open: true,
                            task: task,
                          })
                        }
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
          <div className="flex justify-center items h-[50.875rem] w-[17.5rem] bg-[#E9EFFA] mr-10 rounded-md items-center mt-16 ml-3">
            <Button
              variant="outline"
              className="text-body-text-secondary mb-2 font-bold text-xl hover:text-primary"
              onClick={() => setModalNewColumn(true)}
            >
              + New Column
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 w-full h-full flex items-center justify-center flex-col">
          <div className="mb-8 text-heading-lg text-gray-500 font-bold">
            This board is empty. Create a new column to get started.
          </div>
          <Button
            variant="outline"
            className="text-body-text-secondary text-body-md mb-2 hover:text-primary"
            onClick={() => setModalNewColumn(true)}
          >
            + Add New Column
          </Button>
        </div>
      )}
      {modal && <ViewTask modal={modal} setModal={setModal} />}
      {modalNewColumn && (
        <NewColumn modal={modalNewColumn} setModal={setModalNewColumn} />
      )}
    </div>
  );
}

export default App;

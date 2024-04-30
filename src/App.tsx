import mockBoard from "@/lib/mocks/board.mocks";

import { Button } from "@/components/ui/Button/Button";
import Card from "./components/Card/Card";
function App() {
  return (
    <div className="bg-background h-full">
      {mockBoard.columns.length > 0 ? (
        <div className="flex h-full">
          {mockBoard.columns.map((column) => (
            <div key={column.id} className="w-72 rounded-md p-3">
              <div className="flex justify-between items-center mb-6 mt-3">
                <div className="text-heading-sm font-bold text-body-text-secondary tracking-[0.1rem] flex">
                  <div className={`h-[15px] w-[0.9375rem] rounded-full mr-3`} style={{ backgroundColor: column.color }} /> {column.name} ({column.tasks.length})
                </div>
              </div>
              {column.tasks.length > 0 ? (
                <div className="flex gap-5 flex-col">
                  {column.tasks.map((task) => (
                    <Card
                      title={task.name}
                      todoSubTasks={
                        task.subTasks.filter((subTask) => !subTask.isCompleted)
                          .length
                      }
                      doneSubTasks={
                        task.subTasks.filter((subTask) => subTask.isCompleted)
                          .length
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="text-gray-500">
                  This column is empty. Create a new task to get started.
                </div>
              )}
            </div>
          ))}
          <div className="text-body-text-secondary font-bold h-full flex justify-center items">+ New Column</div>
        </div>
      ) : (
        <div className="bg-gray-300 w-full h-full flex items-center justify-center flex-col">
          <div className="mb-8 text-heading-lg text-gray-500 font-bold">
            This board is empty. Create a new column to get started.
          </div>
          <Button>+ Add New Column</Button>
        </div>
      )}
    </div>
  );
}

export default App;

type Task = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  subTasks: SubTask[];
};

type SubTask = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
};

type Column = {
  id: number;
  name: string;
  tasks: Task[];
};

type Board = {
  id: number;
  name: string;
  color: string;
  columns: Column[];
}[];
const mockBoard: Board = [{
  id: 1,
  name: "Board 1",
  color: "#FF0000",
  columns: [
    {
      id: 1,
      name: "TODO",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "Task 1 description",
          isCompleted: false,
          subTasks: [{
            id: 1,
            name: "SubTask 1",
            description: "SubTask 1 description",
            isCompleted: false,
          }]
        }
      ],
    },
       {
      id: 2,
      name: "DOING",
      tasks: [
        {
          id: 1,
          name: "Task 2",
          description: "Task 2 description",
          isCompleted: false,
          subTasks: [{
            id: 1,
            name: "SubTask 2",
            description: "SubTask 2 description",
            isCompleted: false,
          }]
        }
      ],
    }
  ]
}];

export default mockBoard;
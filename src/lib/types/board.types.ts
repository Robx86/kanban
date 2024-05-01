export type boardTypes = {
  id: string;
  name: string;
  columns: columnTypes[];
}

export type columnTypes = {
  id: string;
  name: string;
  tasks: taskTypes[];
  color: string;
}

export type taskTypes = {
  id: string;
  name: string;
  description?: string;
  isCompleted: boolean;
  subTasks: subTaskTypes[];
  column: string;
}

export type subTaskTypes = {
  id: string;
  name: string;
  isCompleted: boolean;
}

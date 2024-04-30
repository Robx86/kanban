import { boardTypes, columnTypes, subTaskTypes, taskTypes } from '../types/board.types';

const mockSubTasks: subTaskTypes[] = [
  { id: 'sub1', name: 'Sub Task 1', isCompleted: false },
  { id: 'sub2', name: 'Sub Task 2', isCompleted: true },
];

const mockTasks: taskTypes[] = [
  { id: 'task1', name:  'Build UI for onboarding flow', isCompleted: false, subTasks: mockSubTasks },
  { id: 'task2', name:  'Build UI for search', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task2', name:  'Create template structures', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task2', name:  'QA and test all major user journeys', isCompleted: true, subTasks: mockSubTasks},
];

const mockTasksDoing: taskTypes[] = [
  { id: 'task1', name: 'Design settings and search pages', isCompleted: false, subTasks: mockSubTasks },
  { id: 'task2', name: 'Add account management endpoints', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task3', name: 'Design onboarding flow', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task4', name: 'Add search enpoints', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task5', name: 'Add authentication endpoints', isCompleted: true, subTasks: mockSubTasks},
];

const mockTasksDone: taskTypes[] = [
  { id: 'task1', name: 'Conduct 5 wireframe tests', isCompleted: false, subTasks: mockSubTasks },
  { id: 'task2', name: 'Create wireframe prototype', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task3', name: 'Review results of usability tests and iterate', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task4', name: 'Create paper prototypes and conduct 10 usability tests with potential customers', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task5', name: 'Market discovery', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task5', name: 'Competitor analysis', isCompleted: true, subTasks: mockSubTasks},
  { id: 'task5', name: 'Research the market', isCompleted: true, subTasks: mockSubTasks},
];


const mockColumns: columnTypes[] = [
  { id: '1', name: 'TODO', tasks: mockTasks, color: '#49C4E5' },
  { id: '2', name: 'DOING', tasks: mockTasksDoing, color: '#8471F2' },
  { id: '3', name: 'DONE', tasks: mockTasksDone, color: '#67E2AE' },
];

const mockBoard: boardTypes = {
  id: 'board1',
  name: 'Board 1',
  columns: mockColumns,
};

export default mockBoard;
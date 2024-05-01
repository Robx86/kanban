import { boardTypes, columnTypes, subTaskTypes, taskTypes } from '../types/board.types';

const mockSubTasks: subTaskTypes[] = [
  { id: 'sub1', name: 'Sub Task 1', isCompleted: false },
  { id: 'sub2', name: 'Sub Task 2', isCompleted: true },
];

const mockTasks: taskTypes[] = [
  { id: '1', name:  'Build UI for onboarding flow', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: false, subTasks: mockSubTasks, column: 'todo' },
  { id: '2', name:  'Build UI for search', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'todo'},
  { id: '3', name:  'Create template structures', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'todo'},
  { id: '4', name:  'QA and test all major user journeys', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'todo'},
];

const mockTasksDoing: taskTypes[] = [
  { id: '5', name: 'Design settings and search pages', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: false, subTasks: mockSubTasks, column: 'doing'},
  { id: '6', name: 'Add account management endpoints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'doing'},
  { id: '7', name: 'Design onboarding flow', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'doing'},
  { id: '8', name: 'Add search enpoints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'doing'},
  { id: '9', name: 'Add authentication endpoints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'doing'},
];

const mockTasksDone: taskTypes[] = [
  { id: '10', name: 'Conduct 5 wireframe tests', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: false, subTasks: mockSubTasks, column: 'done'},
  { id: '11', name: 'Create wireframe prototype', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
  { id: '12', name: 'Review results of usability tests and iterate', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
  { id: '13', name: 'Create paper prototypes and conduct 10 usability tests with potential customers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
  { id: '14', name: 'Market discovery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
  { id: '15', name: 'Competitor analysis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
  { id: '16', name: 'Research the market', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra est non massa vehicula aliquam.', isCompleted: true, subTasks: mockSubTasks, column: 'done'},
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
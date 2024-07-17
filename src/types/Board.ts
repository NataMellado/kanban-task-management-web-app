export interface Board {
  id: string;
  name: string;
  columns: Column[];
}
export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status?: TaskStatus;
  subtasks: Subtask[];
}
export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export enum TaskStatus {
  Todo = "Todo",
  Doing = "Doing",
  Done = "Done"
}
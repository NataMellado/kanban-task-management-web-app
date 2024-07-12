export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export enum TaskStatus {
  Todo = "Todo",
  Doing = "Doing",
  Done = "Done"
}

export interface Task {
  title: string;
  description: string;
  status?: TaskStatus;
  subtasks: Subtask[];
}

export interface Column {
  name: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  name: string;
  columns?: Column[];
}

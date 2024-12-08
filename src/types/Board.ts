export interface Board {
  id?: number;
  name: string;
  columns: Column[];
  order?: number;
  created_at?: string;
  updated_at?: string;
}
export interface Column {
  id?: number;
  name: string;
  tasks: Task[];
  order?: number;
  created_at?: string;
  updated_at?: string;
}
export interface Task {
  id: number;
  title: string;
  description: string;
  columnId: number;
  subtasks: Subtask[];
  order?: number;
  created_at?: string;
  updated_at?: string;
}
export interface Subtask {
  id: number;
  title: string;
  isCompleted: boolean;
  order?: number;
  created_at?: string;
  updated_at?: string;
}

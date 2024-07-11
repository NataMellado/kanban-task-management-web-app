import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

interface Subtask {
  title: string;
  isCompleted: boolean;
}

enum TaskStatus {
  Todo = "Todo",
  Doing = "Doing",
  Done = "Done"
}

interface Task {
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: Subtask[];
}

interface Column {
  name: string;
  tasks: Task[];
}

interface Board {
  name: string;
  columns: Column[];
}

const useInitialData = () => {
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [boardData, setBoardData] = useLocalStorage<Board[]>("boards", []);

  useEffect(() => {
    if (!initialDataLoaded) {
      fetchData();
    }
  }, [initialDataLoaded]);

    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        setBoardData(data.boards);
        setInitialDataLoaded(true);
      } catch (error) {
        console.error("Error al cargar los datos iniciales:", error);
      }
    };

    const addBoard = (newBoard: Board) => {
      setBoardData([...boardData, newBoard]);
    };

  return [boardData, setBoardData, addBoard] as const;
};

export default useInitialData;

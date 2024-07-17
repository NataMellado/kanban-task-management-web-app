import { useEffect, useState } from "react";
import { Board } from "@/types/Board";


const useData = () => {
  const [boardData, setBoardData] = useState<Board[]>([]);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const addBoard = (newBoard: Board) => {
    const newBoardData = [...boardData, newBoard];
    localStorage.setItem("boards", JSON.stringify(newBoardData));
  };

  const getBoard = (boardId: string) => {
    return boardData.find((board) => board.id === boardId);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos iniciales");
        }
        const data = await response.json();
        setBoardData(data.boards);
        localStorage.setItem("boards", JSON.stringify(data.boards));
        setInitialDataLoaded(true);
      } catch (error) {
        console.error("Error al cargar los datos iniciales:", error);
      }
    }; 
  
    const dataLocalStorage = localStorage.getItem("boards");
    if (!dataLocalStorage) {
      fetchData();
    } else {
      setInitialDataLoaded(true);
    }
  }, [initialDataLoaded]);

  useEffect(() => {
    setBoardData(JSON.parse(localStorage.getItem("boards") || "[]"));
    console.log("boards", boardData);
  }, [localStorage.getItem("boards")]);


  return { boardData, setBoardData, addBoard, getBoard };
};

export default useData;

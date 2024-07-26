import { useEffect, useState } from "react";
import { Board } from "@/types/Board";
import { v4 as uuidv4 } from 'uuid';

const useData = () => {
  // State to store the data
  const [boardData, setBoardData] = useState<Board[]>([]);

  // Function to save data in local storage
  const saveToLocalStorage = (data: Board[]) => {
    localStorage.setItem("boardStorage", JSON.stringify(data));
  }

  // Function to fech initial data from JSON file
  const fetchInitialData = async () => {
    try {
      const response = await fetch("/data/data.json");
      if (!response.ok) {
        throw new Error("Error al cargar los datos iniciales");
      }
      const data = await response.json();
      return data.boards || [];
    } catch (error) {
      console.error("Error al cargar los datos iniciales:", error);
      return [];
    }
  };

  // UseEffect hook to initialize data from local storage or fetch it from the JSON file
  useEffect(() => {
    const storedData = localStorage.getItem("boardStorage");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    } else {
      fetchInitialData().then((data) => {
        setBoardData(data);
        saveToLocalStorage(data);
      });
    }
  }, []);

  // Function to add a new board
  const addBoard = (newBoard: Board) => {
    const newBoardData = [...boardData, newBoard];
    setBoardData(newBoardData);
    saveToLocalStorage(newBoardData);
  };

  // Function to get a board by its id
  const getBoard = (boardId: string) => {
    return boardData.find((board) => board.id === boardId);
  }

  return { boardData, setBoardData, addBoard, getBoard };
};

export default useData;

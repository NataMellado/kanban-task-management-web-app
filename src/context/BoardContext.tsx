"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Board } from "@/types/Board";

interface BoardContextProps {
  boardData: Board[];
  setBoardData: (data: Board[]) => void;
  addBoard: (newBoard: Board) => void;
  getBoard: (boardId: string) => Board | undefined;
  removeBoard: (boardId: string) => void;
}

const BoardContext = createContext<BoardContextProps | undefined>(undefined);

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider: React.FC<BoardProviderProps> = ({ children }) => {
  
    // State to store the data
  const [boardData, setBoardData] = useState<Board[]>([]);

  // Function to update data in local storage and state
  const updateData = (data: Board[]) => {
    localStorage.setItem("boardStorage", JSON.stringify(data));
    setBoardData(data);
  };

  // Function to fech initial data from the JSON file
  const fetchInitialData = async () => {
    try {
      const response = await fetch("/data/data.json");
      if (!response.ok) {
        throw new Error("Error loading initial data");
      }
      const data = await response.json();
      return data.boards || [];
    } catch (error) {
      console.error("Error loading initial data:", error);
      return [];
    }
  };

  // useEffect hook to initialize data from local storage or fetch it from the JSON file
  useEffect(() => {
    const storedData = localStorage.getItem("boardStorage");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    } else {
      fetchInitialData().then((data) => {
        updateData(data);
      });
    }
  }, []);

  // Function to add a new board
  const addBoard = (newBoard: Board) => {
    const storedData = JSON.parse(localStorage.getItem("boardStorage") || "[]");
    updateData([...storedData, newBoard]);
  };

  // Function to get a board by its id
  const getBoard = (boardId: string) => {
    return boardData.find((board) => board.id === boardId);
  };

  // Function to remove a board by its id
  const removeBoard = (boardId: string) => {
    updateData(boardData.filter((board) => board.id !== boardId));
  };

  return (
    <BoardContext.Provider
      value={{ boardData, setBoardData, addBoard, getBoard, removeBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useData must be used within a BoardProvider");
  }
  return context;
};

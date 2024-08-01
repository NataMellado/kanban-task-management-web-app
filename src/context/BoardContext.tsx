"use client";
import React, { useEffect, createContext, useContext, ReactNode } from "react";
import { Board, Column } from "@/types/Board";
import useLocalStorage from "@/hooks/useLocalStorage";

// Context to store the board data
interface BoardContextProps {
  boardData: Board[];
  setBoardData: (data: Board[]) => void;
  addBoard: (newBoard: Board) => void;
  addColumns: (boardId: string, newColumns: Column[]) => void;
  getBoard: (boardId: string) => Board | undefined;
  removeBoard: (boardId: string) => void;
}
const BoardContext = createContext<BoardContextProps | undefined>(undefined);

// Provider to store the board data
interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider: React.FC<BoardProviderProps> = ({ children }) => {
  const [boardData, setBoardData] = useLocalStorage<Board[]>(
    "boardStorage",
    []
  );

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
    if (!boardData.length) {
      fetchInitialData().then((data) => setBoardData(data));
    }
  }, []);

  // Function to add a new board
  const addBoard = (newBoard: Board) => {
    setBoardData((prevData) => [...prevData, newBoard]);
  };

  // Function to add columns to a board
  const addColumns = (boardId: string, newColumns: Column[]) => {
    setBoardData((prevData) =>
      prevData.map((board) =>
        board.id === boardId
          ? { ...board, columns: [...board.columns, ...newColumns] }
          : board
      )
    );
  };

  // Function to get a board by its id
  const getBoard = (boardId: string) => {
    return boardData.find((board) => board.id === boardId);
  };

  // Function to remove a board by its id
  const removeBoard = (boardId: string) => {
    setBoardData((prevData) =>
      prevData.filter((board) => board.id !== boardId)
    );
  };

  return (
    <BoardContext.Provider
      value={{
        boardData,
        setBoardData,
        addBoard,
        addColumns,
        getBoard,
        removeBoard,
      }}
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

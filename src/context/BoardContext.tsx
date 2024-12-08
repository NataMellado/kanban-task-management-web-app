"use client";
import React, { useEffect, createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from "next/navigation"
import { Board, Column } from "@/types/Board";
import { fetchBoardsApi, addBoardApi, addColumnApi, deleteBoardApi } from "@/api/boardsApi";


// Context to store the board data
interface BoardContextProps {
  boardData: Board[];
  loading: boolean;
  fetchBoards: () => void;
  addBoard: (newBoard: Partial<Board>) => Promise<Board>
  addColumns: (boardId: number, newColumns: Column[]) => void;
  getBoard: (boardId: number) => Board | undefined;
  removeBoard: (boardId: number) => void;
}
const BoardContext = createContext<BoardContextProps | undefined>(undefined);

// Provider to store the board data
interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider: React.FC<BoardProviderProps> = ({ children }) => {
  const [boardData, setBoardData] = useState<Board[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  // Fetch all boards 
  const fetchBoards = async () => {
    setLoading(true);
    try {
      const boards = await fetchBoardsApi();
      setBoardData(boards);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  // Add a new board
  const addBoard = async (newBoard: Partial<Board>): Promise<Board> => {
    const createdBoard = await addBoardApi(newBoard);
    setBoardData((prevData) => [...prevData, createdBoard]);
    return createdBoard;
  };

  // Add columns to a board
  const addColumns = async (boardId: number, newColumns: Column[]) => {
    const updatedColumns = await addColumnApi(boardId, newColumns);
    setBoardData((prevData) =>
    prevData.map((board) =>
      board.id === boardId 
        ? { ...board, columns: [...(board.columns || []), ...updatedColumns]} 
        : board
    ));
  };

  // Get a board by its id
  const getBoard = (boardId: number) => boardData.find((board) => board.id === boardId);

  // Remove a board by its id
  const removeBoard = async (boardId: number) => {
    await deleteBoardApi(boardId);
    setBoardData((prevData) => prevData.filter((board) => board.id !== boardId)); 
    router.push("/")
  };

  // Fetch all boards when the component mounts
  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <BoardContext.Provider
      value={{
        boardData,
        loading,
        fetchBoards,
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

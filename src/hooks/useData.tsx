"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { Board } from "@/types/Board";

interface BoardContexrProps {
  boardData: Board[];
  setBoardData: (data: Board[]) => void;
  addBoard: (newBoard: Board) => void;
  getBoard: (boardId: string) => Board | undefined;
}

const BoardContext = createContext<BoardContexrProps | undefined>(undefined);

const useData = () => {
  // State to store the data
  const [boardData, setBoardData] = useState<Board[]>([]);

  // Function to save data to local storage
  const saveToLocalStorage = (data: Board[]) => {
    localStorage.setItem("boardStorage", JSON.stringify(data));
  }

  // Function to fech initial data from the JSON file
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

  // useEffect hook to initialize data from local storage or fetch it from the JSON file
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

  // 



  // Function to add a new board
  const addBoard = (newBoard: Board) => {
    const storedData = JSON.parse(localStorage.getItem("boardStorage") || "[]");
    const updatedData = [...storedData, newBoard];
    saveToLocalStorage(updatedData);
    setBoardData(updatedData);
  };

  


  // Function to get a board by its id
  const getBoard = (boardId: string) => {
    return boardData.find((board) => board.id === boardId);
  }




  return { boardData, setBoardData, addBoard, getBoard };
};

export default useData;

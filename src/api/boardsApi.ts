import { Board, Column, Task, Subtask } from "../types/Board";

const BASE_URL = "http://127.0.0.1:8000/api";

// Fetch all boards
export const fetchBoardsApi = async (): Promise<Board[]> => {
    const response = await fetch(`${BASE_URL}/boards/`);
    if (!response.ok) {
        throw new Error("Error fetching boards");
    }
    return response.json();
};

// Add a new board
export const addBoardApi = async (newBoard: Partial<Board>): Promise<Board> => {
    const response = await fetch(`${BASE_URL}/boards/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newBoard),
    });
    if (!response.ok) {
        throw new Error("Error adding board");
    }
    return response.json();
}

// Add columns to a board
export const addColumnApi = async (
    boardId: number,
    newColumns: Partial<Column>[]
): Promise<Column[]> => {
    const response = await fetch(`${BASE_URL}/boards/${boardId}/columns/`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newColumns),
    });
    if (!response.ok) {
        throw new Error("Error adding columns")
    }
    return response.json();
};


// Delete a board
export const deleteBoardApi = async (boardId:number):  Promise<void> => {
    const response = await fetch(`${BASE_URL}/boards/${boardId}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json"},
    });

    if (!response.ok) {
        throw new Error("Error deleting board")
    }
};



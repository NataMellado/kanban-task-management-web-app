import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

interface Subtask {
    title: string;
    isComplete: boolean;
}

interface Task {
    title: string;
    description: string;
    status: "todo" | "doing" | "done";
    subtasks: Subtask[];
}

interface Column {
    name: string;
    task: Task[];
}


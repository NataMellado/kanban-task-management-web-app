import React from "react";
import Image from "next/image";
interface ColumnProps {
    column: {
        id: string;
        name: string;
        tasks: Task[];
    };
}

interface Task {
    id: string;
    title: string;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
    return (
        <div className="w-70 text-wrap break-words text-headingS tracking-headingS font-bold text-mediumGrey uppercase">
            <h1>{column.name} ({column.tasks.length})</h1>
        </div>
    );
};

export default Column;


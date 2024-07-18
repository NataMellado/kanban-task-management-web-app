import React from "react";
import TaskCard from "@/components/Cards/task";
import { Column } from "@/types/Board";



const ColumnCard = ({ column }: { column: Column }) => {
    return (
        <div className="w-70 text-wrap break-words font-bold ">
            <h1 className="text-mediumGrey text-headingS tracking-headingS uppercase">{column.name} ({column.tasks.length})</h1>
            <div className="mt-4 flex flex-col gap-[20px]">
                {column?.tasks.map((task) => (
                    <TaskCard 
                        key={task.id} 
                        task={task} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ColumnCard;


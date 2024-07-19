import React from "react";
import TaskCard from "@/components/Cards/task";
import { Column } from "@/types/Board";



const ColumnCard = ({ column }: { column: Column }) => {
    return (
        <div className="w-70 text-wrap break-words font-bold shrink-0">
            <h1 className="px-1 text-mediumGrey text-headingS tracking-headingS uppercase">{column.name} ({column.tasks.length})</h1>
            <div className="mt-4 pb-2 px-1 flex flex-col gap-[20px] overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 9rem)' }} >
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


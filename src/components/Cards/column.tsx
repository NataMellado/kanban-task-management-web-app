import React from "react";
import { Column } from "@/types/Board";
import TaskCard from "@/components/Cards/task";

const ColumnCard = ({ column }: { column: Column }) => {
  return (
    <div className="flex flex-col h-min gap-3 pt-4 pb-2 pl-3 pr-1.5 bg-[#E9EFFA] dark:bg-[#2b2c3750] rounded-[0.5rem] w-70 text-wrap break-words font-bold shrink-0">
      
      <h1 className="text-mediumGrey text-headingS tracking-headingS uppercase">
        {column.name} ({column.tasks.length})
      </h1>
      
      {column.tasks.length > 0 && (
        <div
          className="pr-1.5 gap-3 flex flex-col overflow-y-auto custom-scrollbar-column"
          style={{ maxHeight: "calc(100dvh - 14rem)" }}
        >
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      <button className="text-left px-2 py-2 text-headingM text-mediumGrey rounded-lg w-[16rem] hover:bg-white dark:hover:bg-darkGrey">
        + Añadir tarea
      </button>

    </div>
  );
};

export default ColumnCard;

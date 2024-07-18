import React from 'react';
import { Task } from '../../types/Board';

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="flex items-center justify-between px-[16px] py-[23px] rounded-lg shadow-[0_3px_5px_0px_rgba(0,0,100,0.1)] dark:shadow-[0_3px_5px_0px_rgba(0,0,0,0.1)]  bg-white dark:bg-darkGrey ">
        <h1 className="text-headingM text-black dark:text-white">
            {task.title}
        </h1>
    </div>
  );
};

export default TaskCard;
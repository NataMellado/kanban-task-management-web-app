import React from "react";
import { Task } from "@/types/Board";
import TaskModal from "../Modals/TaskModal";

const TaskCard = ({ task }: { task: Task }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex text-left px-[16px] py-[20px] rounded-lg shadow-[0_3px_5px_0px_rgba(0,0,100,0.1)] 
        dark:shadow-[0_3px_5px_0px_rgba(0,0,0,0.1)]  bg-white dark:bg-darkGrey
        border-2 border-transparent hover:border-mainPurple dark:border-transparent dark:hover:border-mainPurpleHover"
      >
        <h1 className="text-headingM text-black dark:text-white">
          {task.title}
        </h1>
      </button>
      {modalOpen && <TaskModal onClose={() => setModalOpen(false)} task={task} />}
    </>
  );
};

export default TaskCard;

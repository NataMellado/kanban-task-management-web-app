"use client";
import React from "react";
import Image from "next/image";

import { Task } from "@/types/Board";
import { useData } from "@/context/BoardContext";
import ClickOutside from "@/components/ClickOutside/ClickOutside";

interface Props {
  onClose: () => void;
  task: Task;
}

const TaskModal = ({ onClose, task }: Props) => {
  return (
    <div className="fixed w-full items-center justify-center top-0 left-0 right-0 bottom-0 flex z-50 bg-black bg-opacity-70">
      <ClickOutside className="flex w-full max-w-[30rem]" onClick={onClose}>
        <form
          style={{ maxHeight: "calc(100vh - 100px)" }}
          className="overflow-hidden flex flex-col gap-[24px] max-h-full w-full p-6 bg-white rounded-md shadow-xl dark:bg-darkGrey dark:text-white"
        >
          <h1 className="text-headingLfont-bold">{task.title}</h1>
          <p className="text-bodyL font-medium leading-bodyL text-mediumGrey">
            {task.description}
          </p>

          <div className="flex flex-col overflow-hidden">
            <label
              className="text-mediumGrey text-bodyL font-bold mb-[8px] dark:text-white"
              htmlFor="boardName"
            >
              Checklist
            </label>

            <div className="overflow-y-auto custom-scrollbar">
                {task.subtasks.map((subtask) => (
                <div
                  key={task.id}
                  className="flex mb-[0.75rem] gap-4 pe-1"
                  >
                  
                <input
                  className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
                  type="text"
                  value={subtask.title}
                  // onChange={(e) => handleColumnChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  // onClick={() => removeColumn(index)}
                  >
                  <Image
                    width={20}
                    height={20}
                    src={"/img/icon-cross.svg"}
                    alt=""
                    />
                </button>
              </div>
              ))}
            </div>
          </div>

        </form>
      </ClickOutside>
    </div>
  );
};

export default TaskModal;

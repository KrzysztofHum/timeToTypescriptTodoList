import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  const { taskName, deadline } = task;
  return (
    <div className="task">
      <div className="content">
        <span>{taskName}</span>
        <span>{deadline}</span>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoTask;

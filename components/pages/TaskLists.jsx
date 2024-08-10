"use client";

import { useContext } from "react";
import TitleWithViewChanger from "../common/TitleWithViewChanger";
import { viewContext } from "@/context";
import GridViewTaskCard from "../common/cards/GridViewTaskCard";
import ListViewTaskCard from "../common/cards/ListViewTaskCard";

const TaskLists = () => {
  const { taskView } = useContext(viewContext);
  return (
    <div className="p-6">
      <TitleWithViewChanger title="Task Lists" />

      {/* Task List Cards */}
      {taskView.grid && <GridViewTaskCard />}
      {taskView.list && <ListViewTaskCard />}
    </div>
  );
};

export default TaskLists;

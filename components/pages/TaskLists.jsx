"use client";

import { useContext } from "react";
import TitleWithViewChanger from "../common/TitleWithViewChanger";
import { viewContext } from "@/context";
import GridViews from "../common/GridViews";
import ListViews from "../common/ListViews";

const TaskLists = () => {
  const { taskView } = useContext(viewContext);
  return (
    <div className="p-6">
      <TitleWithViewChanger title="Task Lists" />

      {/* Task List Cards */}
      <div className="mt-6">
        {taskView.grid && <GridViews />}
        {taskView.list && <ListViews />}
      </div>
    </div>
  );
};

export default TaskLists;

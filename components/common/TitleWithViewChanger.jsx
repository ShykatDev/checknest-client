import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { viewContext } from "@/context";

const TitleWithViewChanger = ({ title }) => {
  const { taskView, handleChangeView } = useContext(viewContext);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex justify-between items-center gap-3">
        <Button
          onClick={() => handleChangeView("grid")}
          size="sm"
          variant={taskView.grid ? "default" : "outline"}
          className="flex gap-1 items-center"
        >
          <Squares2X2Icon className="size-4" />
          <span>Grid</span>
        </Button>
        <Button
          onClick={() => handleChangeView("list")}
          size="sm"
          variant={taskView.list ? "default" : "outline"}
          className="flex gap-1 items-center"
        >
          <QueueListIcon className="size-4" />
          <span>List</span>
        </Button>
      </div>
    </div>
  );
};

export default TitleWithViewChanger;

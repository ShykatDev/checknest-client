"use client";
import { viewContext } from "@/context";
import { useState } from "react";
const ViewChangerProvider = ({ children }) => {
  const [taskView, setTaskView] = useState({
    grid: true,
    list: false,
  });

  const handleChangeView = (view) => {
    setTaskView({
      grid: false,
      list: false,
      [view]: true,
    });
  };

  return (
    <viewContext.Provider value={{ taskView, handleChangeView }}>
      {children}
    </viewContext.Provider>
  );
};

export default ViewChangerProvider;

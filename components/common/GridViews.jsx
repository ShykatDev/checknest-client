import GridViewTaskCard from "./cards/GridViewTaskCard";

const GridViews = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GridViewTaskCard />
      <GridViewTaskCard />
      <GridViewTaskCard />
    </div>
  );
};

export default GridViews;

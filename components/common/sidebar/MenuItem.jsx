import Link from "next/link";
import React from "react";

const MenuItem = ({ items, isCollapsed }) => {
  return (
    <div className="">
      {items.icon && (
        <div className="flex gap-2 items-center p-1">
          <div className="size-6">{items.icon}</div>
          <h2 className="font-semibold">{items.title}</h2>
        </div>
      )}
      <div className="">
        {items.items.map((menu, i) => {
          return (
            <Link
              key={i}
              href={menu.href}
              className="flex gap-2 items-center p-1 duration-200 rounded-md cursor-pointer hover:bg-gray-100 group"
            >
              <div className="size-5 text-gray-500 group-hover:text-black">
                {menu.icon}
              </div>
              <h2>{menu.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;

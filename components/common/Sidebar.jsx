"use client";

import { collapse } from "@/public/icons";
import Image from "next/image";
import ProfileDropdown from "./sidebar/ProfileDropdown";
import { menuOptions } from "@/utils/options";
import MenuItem from "./sidebar/MenuItem";
import { Cog6ToothIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useState } from "react";

const Sidebar = () => {
  return (
    <main
      className={`w-1/5 h-full border rounded-2xl p-6 flex flex-col justify-between transition-all`}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <ProfileDropdown />
          {
            <button>
              <Image
                src={collapse}
                alt="icon"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          }
        </div>

        <div className="space-y-3">
          {menuOptions.map((menuItem, index) => {
            return <MenuItem key={index} items={menuItem} />;
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button variant="outline" className="flex gap-1 items-center">
          <Cog6ToothIcon className="size-5" />
          <h2>Settings</h2>
        </Button>

        <Button variant="outline" className="px-2">
          <MoonIcon className="cursor-pointer size-5" />
        </Button>
      </div>
    </main>
  );
};

export default Sidebar;

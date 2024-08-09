"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ProfileDropdown() {
  return (
    <>
      <div className="flex gap-3 items-start cursor-pointer">
        <Avatar onClick={() => setIsCollapsed(false)}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {
          <div>
            <h2 className="font-semibold">Dropdown</h2>
            <p className="text-sm">saikat@email.com</p>
          </div>
        }
        {/* <ChevronDownIcon className="size-6" /> */}
      </div>
    </>
  );
}

export default ProfileDropdown;

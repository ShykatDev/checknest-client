import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircleIcon,
  HeartIcon,
  PencilSquareIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { FlagIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRandomBGcolor } from "@/utils/colors";

const GridViewTaskCard = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleChangeActiveStatus = () => {
    console.log("checked click");
  };

  const divRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !dotRef.current.contains(event.target) &&
        !divRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-6 border rounded-md">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Switch
              id="active"
              defaultChecked={false}
              onCheckedChange={handleChangeActiveStatus}
            />
            <Label htmlFor="active" className="font-medium">
              Active
            </Label>
          </div>
          <div className="relative">
            <EllipsisHorizontalIcon
              ref={dotRef}
              className="size-5 cursor-pointer"
              onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
              <div
                ref={divRef}
                className="min-w-[250px] absolute right-0 border rounded-md overflow-hidden py-2 backdrop-blur-md bg-white bg-opacity-30 z-10"
              >
                <Link
                  href="/"
                  className="flex gap-2 px-3 py-2 hover:bg-gray-100"
                  onClick={() => setShowOptions(false)}
                >
                  <PencilSquareIcon className="size-4" />
                  <span className="text-sm">Edit Task</span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-2 px-3 py-2 hover:bg-gray-100"
                  onClick={() => setShowOptions(false)}
                >
                  <CheckCircleIcon className="size-4" />
                  <span className="text-sm">Mark as complete</span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-2 px-3 py-2 hover:bg-gray-100"
                  onClick={() => setShowOptions(false)}
                >
                  <TrashIcon className="size-4" />
                  <span className="text-sm">Delete Task</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="my-3">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl">Design</h2>
          <HeartIcon className="size-5 cursor-pointer" />
        </div>
        <p className="truncate text-gray-500 mt-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          aspernatur maxime itaque ex iste provident neque laborum nobis,
          suscipit eos? Modi repellendus doloremque reiciendis minima,
          consequuntur vitae illo blanditiis ducimus.
        </p>
      </div>

      {/* Sats */}
      <Table className="">
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="">Subtask</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <Badge className="space-x-1">
                <div className="size-2 bg-white rounded-full"></div>
                <span>In_Progress</span>
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                <CalendarIcon className="size-4 mt-[1px]" />
                <span className="text-sm">28 Aug, 2024</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                <CalendarIcon className="size-4 mt-[1px]" />
                <span className="text-sm">28 Aug, 2024</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge className="space-x-1">
                <FlagIcon className="size-4 mt-[1px]" /> <span>Low</span>
              </Badge>
            </TableCell>
            <TableCell className="">1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Tags */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xs">2 days ago</p>

        <div className="w-4/5 flex justify-end items-center gap-2">
          {[...Array(4)].map((item) => {
            const color = getRandomBGcolor();
            return (
              <>
                <Badge
                  variant="secondary"
                  className={`space-x-1`}
                  style={{ background: color.light }}
                >
                  <TagIcon className="size-4" style={{ color: color.dark }} />
                  <span style={{ color: color.dark }}>frontend</span>
                </Badge>
              </>
            );
          })}

          <Badge variant="secondary" className="space-x-1">
            4+
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default GridViewTaskCard;

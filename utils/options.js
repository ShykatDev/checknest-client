import {
  PlusCircleIcon,
  FlagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  ForwardIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  HashtagIcon,
  HeartIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export const menuOptions = [
  {
    icon: null,
    title: "",

    items: [
      {
        icon: <PlusCircleIcon />,
        title: "Add Task",
        href: "/add-task",
      },
      {
        icon: <MagnifyingGlassIcon />,
        title: "Search",
        href: "",
      },
      {
        icon: <DocumentCheckIcon />,
        title: "ToDo",
        href: "",
      },
      {
        icon: <ForwardIcon />,
        title: "Ongoing",
        href: "",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Completed",
        href: "",
      },
    ],
  },
  {
    icon: <Square3Stack3DIcon />,
    title: "Collections",

    items: [
      {
        icon: <HeartIcon />,
        title: "Favourites",
        href: "/favourites",
      },
      {
        icon: <PlayIcon />,
        title: "Active",
        href: "",
      },
    ],
  },
  {
    icon: <FlagIcon />,
    title: "Priority",

    items: [
      {
        icon: <HashtagIcon />,
        title: "Low",
        href: "",
      },
      {
        icon: <HashtagIcon />,
        title: "Medium",
        href: "",
      },
      {
        icon: <HashtagIcon />,
        title: "High",
        href: "",
      },
    ],
  },
];

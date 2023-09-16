import { SvgIconComponent } from "@mui/icons-material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type RightMenu = {
  id: string;
  title: string;
  href: string;
  Icon: SvgIconComponent;
  badgeNumber: number;
};

const menuList: RightMenu[] = [
  {
    id: "_1",
    title: "Search",
    href: "/search",
    Icon: SearchIcon,
    badgeNumber: 0,
  },
  {
    id: "_2",
    title: "Notification",
    href: "#",
    Icon: NotificationsIcon,
    badgeNumber: 1,
  },
  {
    id: "_3",
    title: "Account",
    href: "#",
    Icon: AccountCircleIcon,
    badgeNumber: 0,
  },
];

export { menuList };

export type { RightMenu };

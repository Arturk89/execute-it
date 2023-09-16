import { IconButton } from "../../../ui/Buttons/IconButton";
import { Box } from "@mui/material";
import { menuList } from "./menu-list";
import Link from "next/link";

export function RightMenu() {
  return (
    <Box>
      {menuList.map((s) => (
        <IconButton key={s.id} title={s.title} badgeNumber={s.badgeNumber}>
          <Link href={s.href}>
            <s.Icon />
          </Link>
        </IconButton>
      ))}
    </Box>
  );
}

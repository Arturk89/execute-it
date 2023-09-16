import { Box } from "@mui/material";
import { LeftMenu } from "./left-menu";
import { RightMenu } from "./right-menu";
import styles from "./navigate.module.css";
import { NavigationWrapper } from "./nav-wrapper";

export function Navigate() {
  return (
    <Box component="nav" className={styles.nav}>
      <LeftMenu />
      <RightMenu />
    </Box>
  );
}

import { Box } from "@mui/material";
import styles from "./nav-wrapper.module.css";

type Props = {
  children: React.ReactNode;
};

export function NavigationWrapper({ children }: Props) {
  return <Box className={styles.wrapper}>{children}</Box>;
}

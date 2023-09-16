import { Box } from "@mui/material";
import styles from "./main.module.css";

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <Box component="main" className={styles.main}>
      {children}
    </Box>
  );
}

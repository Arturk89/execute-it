import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DD403C",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});

export { theme };

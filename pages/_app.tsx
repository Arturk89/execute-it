import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../utils/material-ui/material-theme.config";
import { Main } from "../layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("page props ", pageProps);
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;

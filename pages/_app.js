import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import BaseStyles from "components/base-styles"
import "@mdi/font/css/materialdesignicons.min.css"

const colors = {
  blue_100: "#F2F2FF",
  blue_300: "#8F8DF4",
  blue_500: "#3330EA",
  blue_700: "#1412A9",
  blue_900: "#060533",

  green_100: "#E6FFF5",
  green_300: "#A4F5D6",
  green_500: "#67EBB8",
  green_700: "#20AE78",
  green_900: "#06402A",

  grey_100: "#F9F9FF",
  grey_300: "#E2E2E8",
  grey_500: "#CBCBD0",
  grey_700: "#565659",
  grey_900: "#252526",
}

const theme = {
  colors,
  shadows: ["0 12px 0 -6px rgba(0, 0, 0, 0.1)"],
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

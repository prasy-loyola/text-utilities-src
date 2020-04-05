import React from "react";
import { ThemeProvider } from "styled-components";
import Box from "styled-minimal/Box";
import "./App.css";
import UtilitiesPage from "./components/utilitypage/UtilitiesPage";

const theme = {
  button: {
    borderRadius: {
      xs: "2px",
      sm: "3px",
      md: "4px",
      lg: "6px",
      xl: "8px",
    },
  },
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128],
  breakpoints: {
    xs: 0,
    ix: 400,
    md: 768,
    lg: 1024,
    xl: 1360,
    xxl: 1920,
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 32, 48],
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box fontSize={1}>
          <UtilitiesPage></UtilitiesPage>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

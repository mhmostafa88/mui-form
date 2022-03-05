import React from "react";
import ButtonAppBar from "./components2/AppBar";
import ImageCard from "./components2/ImageCard";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const APP2 = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <ButtonAppBar />
      <ImageCard />
    </div>
    </ThemeProvider>
  );
};

export default APP2;

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#232325",
      light: "#e5e5ec",
      dark: "#232325",
    },
    secondary: {
      main: "rgba(101,66,138,0.65)",
      light: "rgba(211,187,236,0.9)",
      dark: "rgba(59,9,100,0.65)",
    },
  },
  typography: {
    button: {
      fontWeight: 500,
      lineHeight: 1.26,
      letterSpacing: "0.38em",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#e5e5ec",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgba(101,66,138,0.65)"
        }
      }
    },
  },
});

export default theme;

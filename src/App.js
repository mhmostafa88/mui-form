import "./App.css";
import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Employees from "./pages/Employees/Employees.js";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import StyledPaperExample from "./components/StyledPaper.tsx";


const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    paddingTop: "50px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
    <SideMenu />
      <Header />
        <div className={classes.appMain}>
          <Employees />
          <CssBaseline />
        </div>
    </>
  );
}

export default App;

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Employees from './pages/Employees/Employees.js';

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props:{
      MuiButton: {
        disableRipples: true
    }

  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '50px',
    paddingTop: '50px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Employees />
      </div>
    </ThemeProvider>

  );
}

export default App;

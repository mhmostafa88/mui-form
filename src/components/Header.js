import {
  AppBar,
  Grid,
  InputBase,
  Toolbar,
  Box,
  IconButton,
  Badge,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  ChatBubbleOutline,
  NotificationImportant,
  NotificationsNone,
  PowerSettingsNew,
} from "@mui/icons-material";
import {styled} from "@mui/system";
// import theme from "../theme";

const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end"
});

const useStyles = makeStyles((theme) => ({
  Box: {
    marginLeft: "320px",
  },
  BarIcons: {

  },
  searchInput: {
    opacity: "0.6",
    padding: 8,
    fontSize: "0.8rem",
    "&:hover": {
      background: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: 8,
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.Box}>
      <AppBar position="static" sx={{ color: "primary" }} elevation={2}>
        <Toolbar>
          <Grid container alignItems="center" sx={{ flexWrap: "nowrap" }}>
            <Grid item sm={4} style={{ border: "1px solid #253053" }}>
              <InputBase
                placeholder="Search topics"
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
              <StyledGrid item sm={8} className={classes.BarIcons}>
                <IconButton>
                  <Badge badgeContent={3} color="secondary">
                    <NotificationsNone color="secondary" />{" "}
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={5} color="secondary">
                    <ChatBubbleOutline color="secondary" />
                  </Badge>
                </IconButton>
                <IconButton>
                  <PowerSettingsNew />
                </IconButton>
              </StyledGrid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

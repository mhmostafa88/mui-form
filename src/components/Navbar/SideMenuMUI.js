import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { border, styled } from '@mui/system';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { mainNavbarItems } from './consts/navbarListItems';
import { useParams, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';

const drawerWidth = 330;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(Drawer)({
  backgroundColor: 'red',
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: 'white',
    border: '1px solid #F3EFFB'
  },
});

const ListItemStyled = styled(ListItem)({
  '&:hover' : {
    background: 'black',
    color: 'white',

    '& .MuiListItemIcon-root' : {
      color: 'white'
    }
  }
})

export default function SideMenu() {
  const theme = useTheme
const navigate = useNavigate();
  return (
      <StyledDrawer
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map(text => (
            <ListItemStyled>
            <ListItem button key={text.id} onClick={() => navigate(text.route)}>
              
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.label} />
              
            </ListItem>
            </ListItemStyled>
          ))}
        </List>
        </StyledDrawer>
  )
}

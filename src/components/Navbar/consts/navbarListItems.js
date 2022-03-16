import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ReviewsIcon from '@mui/icons-material/Reviews';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home', 
        route: '/',
    },
    {
        id: 1,
        icon: <TravelExploreIcon />,
        label: 'Traveling Destinations', 
        route: 'destinations',
    },
    {
        id: 2,
        icon: <LocationCityIcon />,
        label: 'City of the Day', 
        route: 'destinations',
    },
    {
        id: 3,
        icon: <ReviewsIcon />,
        label: 'Share your experience', 
        route: 'destinations',
    },
]
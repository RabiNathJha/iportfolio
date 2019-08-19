import { createMuiTheme } from '@material-ui/core/styles';
import getPalette from './palette';
import { THEME } from './constants'

import getBorder from './border';

//material ui core
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Grid,
    Button,
    InputLabel,
    Select,
    OutlinedInput,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    TextField,
    Chip,
    Tooltip,
    FilledInput,
    InputAdornment,
    CircularProgress,
    GridList,
    Hidden,
    SwipeableDrawer,
    CssBaseline,
    Avatar,
    Box,
    useMediaQuery,

    //transitions
    Slide

} from '@material-ui/core';

//tansitions
import {
    Zoom,
    Rotate,
    Bounce,
    Reveal
} from 'react-reveal';


//icons
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    MailOutline as MailOutlineIcon,
    Call as CallIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';


//style
import {
    ThemeProvider,
    withStyles ,
    useTheme
} from '@material-ui/styles';


export default (themeType) => {

    const theme = {
        palette: getPalette(themeType),   // you can overwrite other variables too check MUI docs for more info
        border: getBorder(themeType),
    };

    return createMuiTheme(theme);
};

export {
    THEME,

    //material ui core
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Grid,
    Button,
    InputLabel,
    Select,
    OutlinedInput,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    TextField,
    Chip,
    Tooltip,
    FilledInput,
    InputAdornment,
    CircularProgress,
    GridList,
    Hidden,
    SwipeableDrawer,
    CssBaseline,
    Avatar,
    Box,
    useMediaQuery,

    //icons mui
    ChevronLeftIcon,
    ChevronRightIcon,
    MailOutlineIcon,
    CallIcon,
    ArrowForwardIosIcon,
    ExpandMoreIcon,
    
    //icons ionicons
    LogoLinkedin,
    LogoTwitter,
    LogoInstagram,
    LogoGithub,
    LogoFacebook,

    //style
    ThemeProvider,
    withStyles,
    useTheme,

    //transitions
    Slide,
    Zoom,
    Rotate,
    Bounce ,
    Reveal
};

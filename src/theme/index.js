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
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';

import {
    ThemeProvider,
    withStyles 
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

    //icons
    ChevronLeftIcon,
    ChevronRightIcon,

    //style
    ThemeProvider,
    withStyles
};

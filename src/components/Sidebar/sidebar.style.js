
const drawerWidth = 240;

export default (theme) => {
    console.log(theme)
    return({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: 'linear-gradient(to right bottom, #eeeeee, #bdbdbd)'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavihideDrawerIconngScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(9) + 1,
        background: 'linear-gradient(to right bottom, #eeeeee, #bdbdbd)'

    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0px',
        '&:hover': {
            cursor: 'pointer',
        },
        ...theme.mixins.toolbar,

    },
    content: {
        flexGrow: 1,
    },
    rabiAvatar:{
        margin: 10,
        width: 150,
        height: 150,
    },
    hideDrawerIcon:{
        padding: '0px'
    },
    avatarBottomBar: {
        display:'flex',
        flexDirection: 'column',
        marginLeft: theme.spacing(3),
        fontFamily: 'Courier New',
        marginBottom: theme.spacing(1)
    },
    avatarName: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.spacing(3),
    },
    avatarEmailAndNo:{
        fontSize: theme.spacing(1.5),
        display:'flex',
        flexDirection: 'row',
    },
    alignEmailAndNo: {
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5)
    },
    contactsMinimized:{
        marginTop: '100%',
    },
    contactAlignWhenOpen: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop:'0px',
        paddingBottom:'0px'
    },
    contactAlignWhenClosed: {
        padding: theme.spacing(0.5)
    },
    contactButton: {
        padding: theme.spacing(1)
    }
  })};
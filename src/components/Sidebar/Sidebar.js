import React, {useState} from 'react';
import clsx from 'clsx';

import { 
    Drawer,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ChevronLeftIcon,
    ListItem,
    ListItemIcon,
    withStyles,
    MailOutlineIcon,
    CallIcon,
    Zoom,
 } from '../../theme';
 import AvatarComp from './AvatarComp';
 import { contactDetails } from './constants';
 import style from './sidebar.style';
 import { useSpring, animated } from 'react-spring';

const Sidebar = (props) => {


    //avatar animation functions and  varaibles
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 200  , 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    
    const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 4, tension: 3500, friction: 60 } }))
    //


    const { classes, children, avatarName, avatarEmail, avatarCellNo } = props;
    const [open, setOpen] = useState(true);

    const toogleDrawerView = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Zoom duration={400} right={!open} left={open} key={open}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}
                    open={true}
                >
                    <div className={classes.toolbar} onClick={toogleDrawerView}>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: springProps.xys.interpolate(trans) }}
                        >
                            <AvatarComp
                                drawerOpen={open}
                                key={open}
                            />
                        </animated.div>
                        { open &&
                            <IconButton onClick={toogleDrawerView} className={classes.hideDrawerIcon}>
                                <ChevronLeftIcon />
                            </IconButton>
                        }
                    </div>
                    { open && <div className={classes.avatarBottomBar}>
                                <Typography variant='inherit' className={classes.avatarName}>
                                    {avatarName}
                                </Typography>
                                <div className={classes.avatarEmailAndNo}>
                                    <MailOutlineIcon fontSize='small'/>
                                    <Typography variant='inherit' className={classes.alignEmailAndNo}>
                                        {avatarEmail}
                                    </Typography>
                                </div>
                                <div className={classes.avatarEmailAndNo}>
                                    <CallIcon fontSize='small'/>
                                    <Typography variant='inherit' className={classes.alignEmailAndNo}>
                                        {avatarCellNo}
                                    </Typography>
                                </div>
                            </div>
                    }
                    <Divider />
                    <List className={(!open) ? classes.contactsMinimized: ''}>
                    {contactDetails.map((item, index) => {
                        const Icon = item.icon;
                        return(
                            <ListItem key={index} className={(open) ? classes.contactAlignWhenOpen: classes.contactAlignWhenClosed}>
                            <ListItemIcon>
                                <a href={`${item.link}`} target="_blank">
                                    <IconButton className={classes.contactButton} color='inherit' size='medium'>
                                        <Icon fontSize="46px" color="#404040" />
                                    </IconButton>
                                </a>
                            </ListItemIcon>
                            </ListItem>
                        );
                        })}
                    </List>
                    {open && <Divider />}
                </Drawer>
            </Zoom>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
};

Sidebar.defaultProps = {
    avatarName: 'Rabinath Jha',
    avatarEmail: 'Rabijh88@gmail.com',
    avatarCellNo: '+91 9051773271',
};

export default withStyles(style)(Sidebar);

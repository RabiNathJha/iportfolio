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
 } from '../../theme';
 import AvatarComp from './AvatarComp';
 import { contactDetails } from './constants';
 import style from './sidebar.style';

const Sidebar = (props) => {

    const { classes, children, avatarName, avatarEmail, avatarCellNo } = props;
    const [open, setOpen] = useState(true);

    const toogleDrawerView = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                    <AvatarComp
                        drawerOpen={open}
                        key={open}
                    />
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
                                    <Icon fontSize="40px" color="#404040" />
                                </IconButton>
                            </a>
                        </ListItemIcon>
                        </ListItem>
                    );
                    })}
                </List>
                {open && <Divider />}
            </Drawer>
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

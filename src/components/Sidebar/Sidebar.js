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
    ListItemText,
    withStyles
 } from '../../theme';
 import AvatarComp from './AvatarComp';
 import style from './sidebar.style';

const Sidebar = (props) => {

    const { classes, children } = props;
    const [open, setOpen] = useState(true);

    const toogleDrawerView = () => {
        setOpen(!open);
    }

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
                        <IconButton onClick={toogleDrawerView}>
                            <ChevronLeftIcon />
                        </IconButton>
                    }
                </div>
                <Divider />
                {/* <List>
                {['Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List> */}
                <Divider />
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
};

export default withStyles(style)(Sidebar);

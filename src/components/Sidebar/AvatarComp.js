import React from 'react';
import { 
    Avatar,
    withStyles
 } from '../../theme';

import { rabiAvatar } from '../../static/images/avatar';



 const AvatarComp = (props) => {
    const {drawerOpen, margin, width, height} = props;
    let decreaseFactor = drawerOpen ? 1 : 3.5;

    const style = {
        avatar:{
            margin: margin/decreaseFactor,
            width: width/decreaseFactor,
            height: height/decreaseFactor,
        }
    };

    const AvatarWithoutStyle = ({classes}) => <Avatar
                                        alt="Rabinath Jha"
                                        src={rabiAvatar}
                                        className={classes.avatar}
                                    />

    const AvatarWithStyle = withStyles(style)(AvatarWithoutStyle);

    return(
        <AvatarWithStyle />
    );
 };

 AvatarComp.defaultProps = {
    drawerOpen: true,
    margin: 8,
    width: 160,
    height: 160,
 }

 export default AvatarComp;

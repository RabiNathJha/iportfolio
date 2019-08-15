import React from 'react';
import { 
    Avatar,
    withStyles
 } from '../../theme';

import { rabiAvatar } from '../../static/images/avatar';



 const AvatarComp = (props) => {
    const {drawerOpen, margin, width, height} = props;

    const style = {
        avatar:{
            margin,
            width,
            height
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
    margin: '9%',
    width: '85%',
    height: '85%',
 }

 export default AvatarComp;

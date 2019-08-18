import React from 'react';
import { withStyles, ArrowForwardIosIcon } from '../../theme';
import ParticleEffectButton from 'react-particle-effect-button';
import { styles } from './knome.style';

const Knome = ({showButton, classes, onClick, name}) => {
    return(
        <div onClick={() => onClick(true)} >
            <ParticleEffectButton
                color='#121019'
                hidden={showButton}
                duration={1400}
                direction='left'
            >
                <button className={!showButton ? classes.button: `${classes.button} ${classes.visibility}`}>
                    <span>
                        {name}
                        <span style={{marginLeft:'8px'}}>
                            {['#616161','#9e9e9e', '#bdbdbd'].map((item) => <ArrowForwardIosIcon style={{color: item}} key={item} fontSize="small"/>)}
                            </span>
                        </span>
                    </button>
            </ParticleEffectButton>
        </div>
    );
};

Knome.defaultProps = {
    name: 'no name'
}

export default withStyles(styles)(Knome);

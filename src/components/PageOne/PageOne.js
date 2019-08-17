import React, {useState} from 'react';
import { withStyles, Bounce, Typography, Box, Rotate, ArrowForwardIosIcon } from '../../theme';
import Typist from 'react-typist';
import ParticleEffectButton from 'react-particle-effect-button';
import { styles } from './pageOne.style';

const PageOne = (props) => {

    const { classes } = props;
    const [ showButton, setButtonDisplay ] = useState(true);

    setTimeout(() => setButtonDisplay(false), 4000)

    return (
        <div className={classes.body}>
            &nbsp;
            <Bounce delay={500} right>
                <div className={classes.contentOne}>
                    <Typist
                        stdTypingDelay={40}
                        cursor={{
                            show: false,
                        }}
                    >
                       <div className={classes.textCont}>
                           <Typography className={classes.nameWrapperOne}>
                               <Box fontFamily='Caveat'>Hello, I'am &nbsp;</Box>
                               <Box fontFamily='Caveat' className={classes.name} textAlign='right'>
                                    Rabinath Jha
                                </Box>
                            </Typography>
                        </div>
                        <Typography className={classes.nameWrapperTwo}>
                            <Box fontFamily='Caveat'>Trust me, I'm a software developer.</Box>
                        </Typography>
                    </Typist>
                </div>
            </Bounce>
            <div className={classes.viewMyWorkBtn}>
                <Rotate delay={4400}>
                    <div onClick={() => setButtonDisplay(true)} >
                        <ParticleEffectButton
                            color='#121019'
                            hidden={showButton}
                            duration={1400}
                            direction='left'
                        >
                            <button className={classes.button}>
                                <span>
                                    KNOME
                                    <span style={{marginLeft:'8px'}}>
                                        {[1,2,3].map((item) => <ArrowForwardIosIcon key={item} fontSize="small"/>)}
                                        </span>
                                    </span>
                                </button>
                        </ParticleEffectButton>
                    </div>
                </Rotate>
            </div>
        </div>
    );
};

export default withStyles(styles)(PageOne);
import React, {useState} from 'react';
import { withStyles, Bounce, Typography, Box, Rotate, ExpandMoreIcon } from '../../theme';
import Typist from 'react-typist';
import { styles } from './pageOne.style';
import { KnomeButton } from '../Buttons';

const PageOne = (props) => {

    const { classes, name, profession } = props;
    const [ hideKnomeButton, setKnomeButtonDisplay ] = useState(true);
    const [ hideOtherButton, setOtherButtonDisplay ] = useState(false);
    const [ timerCounter, setTimerCounter ] = useState(0);

    setTimeout(() => {
        if(timerCounter === 0){
            setKnomeButtonDisplay(false);
            setTimerCounter(1);
        }
    }, 4000);

    const onClickKnowMe = () => {
        setKnomeButtonDisplay(!hideKnomeButton);
        setTimeout(()=> {
            setTimerCounter(2);
            setOtherButtonDisplay(!hideOtherButton);
        }, 1500)
    };

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
                                    {name}
                                </Box>
                            </Typography>
                        </div>
                        <Typography className={classes.nameWrapperTwo}>
                            <Box fontFamily='Caveat'>Trust me, I'm a {profession}.</Box>
                        </Typography>
                    </Typist>
                </div>
            </Bounce>
                <div className={ timerCounter !==2 ? classes.viewKnowMeBtn: classes.hideKnowMebutton}>
                        <KnomeButton
                            showButton={hideKnomeButton}
                            onClick={onClickKnowMe}
                            name={'KNOME'}
                        />
                </div>
                <div className={ timerCounter !==2 ? '': classes.viewOthersBtnGroup} >
                    <div className={classes.viewOthersBtn}>
                        <Rotate>
                            <KnomeButton
                                showButton={!hideOtherButton}
                                onClick={()=>({})}
                                name={'PROJECTS'}
                            />
                        </Rotate>
                    </div>
                    <div className={classes.viewOthersBtn}>
                        <Rotate>
                            <KnomeButton
                                showButton={!hideOtherButton}
                                onClick={()=>({})}
                                name={'ABOUT'}
                            />
                        </Rotate>
                    </div>
                    <div className={classes.viewOthersBtn}>
                        <Rotate>
                            <KnomeButton
                                showButton={!hideOtherButton}
                                onClick={()=>({})}
                                name={'BLOGS'}
                            />
                        </Rotate>
                    </div>
                </div>
                
        </div>
    );
};

PageOne.defaultProps = {
    name: 'Rabinath Jha',
    profession: 'software developer'
};

export default withStyles(styles)(PageOne);
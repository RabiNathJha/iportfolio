import React from 'react';
import { withStyles } from '../../theme';
import grey from '@material-ui/core/colors/grey';
import Typist from 'react-typist';
import ReactTypingEffect from 'react-typing-effect';

const styles = theme => ({
    body: {
        backgroundColor: grey[200],
        height: '100%'
    },
    content: {
        margin: 'auto',
        width: '60%',
        // border: '3px solid green',
        padding: '10px',
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Raleway'
    },
    nameWrapper: {
        fontSize: '3vw'
    },
    name: {
        fontSize: '3.3vw',
        fontFamily: 'Raleway-semibold',
        color: '#E31B6D',
        fontSize: '32pt',
        fontWeight: '400'
    }
});

const PageOne = (props) => {

    const { classes } = props;

    return (
        <div className={classes.body}>
            &nbsp;
           <div className={classes.content}>
                <Typist
                    stdTypingDelay={100}
                    cursor={{
                        show: false,
                      }}
                >
                    <span className={classes.nameWrapper}>Hello, I am </span><span className={classes.name}>Rabinath Jha</span>
                    <div className={classes.nameWrapper}>I'm a software developer</div>
                </Typist>
            </div>
        </div>
    );
};

export default withStyles(styles)(PageOne);
import { grey } from '@material-ui/core/colors'; 

export const styles = theme => ({
    body: {
        backgroundColor: grey[200],
        height: '100%',
        border: '0px',
    },
    contentOne: {
        margin: 'auto',
        width: '100%',
        background: 'linear-gradient(45deg, #eeeeee 30%, #bdbdbd 90%)',
        padding: '10px',
        marginTop: '15vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cursive'
    },
    textCont: {
        display: 'flex'
    },
    nameWrapperTwo: {
        fontSize: '30pt',
    },
    nameWrapperOne: {
        fontSize: '30pt',
        display: 'flex'
    },
    name: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: '400',
        fontSize: '32pt',
    },
    viewMyWorkBtn: {
        width: '20%',
        marginLeft: '30%',
        marginTop: '15%'
    },
    button: {
        display: 'inline-block',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '40px',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '28px',
        padding: '10px 0px 10px 10px',
        width: '240px',
        transition: 'all 1s',
        cursor: 'pointer',
        margin: '5px',
        fontFamily:'Caveat',

        '&:hover span': {
            paddingRight: '10px',
            '& span': {
                paddingLeft:'50px',
                paddingRight: '0px'
            },
          },

        '& span': {
            cursor: 'pointer',
            display: 'inline-block',
            position: 'relative',
            transition: '0.5s',
            color:'black',
        },

        '& span span': {
            transition: '0.5s',
        },
        '& span:after': {
            position: 'absolute',
            transition: '0.5s',
            padding: '15px',
        },
    }
});
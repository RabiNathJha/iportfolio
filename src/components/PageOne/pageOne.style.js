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
        marginBottom: '8vh',
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
    viewKnowMeBtn: {
        width: '20%',
        marginLeft: '35%',
        // marginTop: '1%'
    },
    hideKnowMebutton: {
        visibility: 'hidden',
        width:'0%',
        // marginLeft: '15%',
        height:'0%',
        zIndex:'-2'
    },
    viewOthersBtn: {
        marginTop: '-1%',
        marginLeft: '35%',
        marginBottom: '1%'
    },
    viewOthersBtnGroup: {
        marginBottom: '6%',
    }
});
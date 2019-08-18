export const styles = (theme) => ({
    button: {
        display: 'inline-block',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '28px',
        padding: '10px 0px 10px 10px',
        width: '280px',
        transition: 'all 1s',
        cursor: 'pointer',
        margin: '2px',
        fontFamily:'Caveat',
        border: '4px solid transparent',
        boxShadow: '0 0px 0px grey, inset 0 0 6px #f4ff81',
        borderRadius: '40px',

        '&:hover': {
            boxShadow: '0 0px, inset 0 0 18px #f4ff81',
        },

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
            letterSpacing: '1.6px'
        },

        '& span span': {
            transition: '0.5s',
        },
        '& span:after': {
            position: 'absolute',
            transition: '0.5s',
            padding: '15px',
        },
    },
    visibility: {
        visibility: 'hidden'
    }
});
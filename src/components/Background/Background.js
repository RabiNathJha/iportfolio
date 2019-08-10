import React from 'react';
import Particles from 'react-particles-js';

const Background = (props) => {
    return(
        <Particles
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "red",
                            blur: 1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
            style={{
                width: '100%',
                // backgroundImage: `url(${logo})` 
            }}
        />
    );
};

export default Background;
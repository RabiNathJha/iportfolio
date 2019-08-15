import React from 'react';
import Particles from 'react-particles-js';

const Background = (props) => {
    return(
        <Particles
        params={{
            polygon: {
                enable: true,
                type: 'inside',
                move: {
                    radius: 10
                },
            }
        }}
        />
    );
};

export default Background;
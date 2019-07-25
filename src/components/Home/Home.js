import React from 'react';
import Particles from 'react-particles-js';

import Sidebar from '../Sidebar';

const Home = () => (
    <div>
        <Sidebar>
            <div>
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
                        }
                    }}
                    style={{
                        width: '100%',
                        // backgroundImage: `url(${logo})` 
                    }}
                />
            </div>
        </Sidebar>
    </div>
);

export default Home;
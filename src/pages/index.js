import React from 'react';

import getTheme, { ThemeProvider, THEME } from '../theme';
import Home from '../components/Home';

export default () => (
    <ThemeProvider theme={getTheme(THEME.LIGHT)} >
        <Home />
    </ThemeProvider>
);

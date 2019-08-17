import React from 'react';
import {Helmet} from "react-helmet";

import getTheme, { ThemeProvider, THEME } from '../theme';
import Home from '../components/Home';

export default () => (
    <ThemeProvider theme={getTheme(THEME.LIGHT)} >
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=512" />
            <title>iPortfolio</title>
            <link href="https://fonts.googleapis.com/css?family=Caveat&display=swap" rel="stylesheet" />
        </Helmet>
        <Home />
    </ThemeProvider>
);

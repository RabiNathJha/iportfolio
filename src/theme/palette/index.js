import lightPalette from './light';
import darkPalette from './dark';
import commonPalette from './common';
import { THEME } from '../constants';

export default (themeType) => {
    const palette = (themeType) === THEME.LIGHT ? lightPalette : darkPalette;

    return {
        ...commonPalette,
        ...palette
    };
};

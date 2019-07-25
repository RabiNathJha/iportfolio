import { THEME } from '../constants';
import borderDark from './borderDark';
import borderLight from './borderLight';

export default (themeType) => {
    return themeType === THEME.LIGHT ? borderLight : borderDark;
};

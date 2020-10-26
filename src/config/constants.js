import { APP } from './settings';

const CONSTANTS = {
  APP: {
    NAME: 'Updated Resume',
    COMPANY: 'Michel Popolin',
  },
  ENVIRONMENT: {
    TEST: 'TEST',
    DEVELOPMENT: 'DEVELOPMENT',
    PRODUCTION: 'PRODUCTION',
    CURRENT: process.env.REACT_APP_ENV,
  },
  ROUTES: {
    HOME: {
      PATH: `${APP.WORKING_DIR}/`,
      NAME: 'Home',
      ENABLED: true,
      SHOW_IN_MENU: false,
      SHOW_IN_NAV: true,
      ICON: 'home',
    },
  },
};

export default CONSTANTS;

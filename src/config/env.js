import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironnementVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnvironnementVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironnementVariables : prodEnvironnementVariables;

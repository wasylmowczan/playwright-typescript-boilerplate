import { config } from './config';
import { Url } from './urls.type';

export const APP_URLS = {
  login: `${config.baseUrl}/auth/login`,
  home: `${config.baseUrl}/home`,
  notFound: `${config.baseUrl}/notExistingPage`,
};

export const API_URLS = {
  merchant: (): Url => ({ base: config.apiUrl, path: '/merchants' }),
};

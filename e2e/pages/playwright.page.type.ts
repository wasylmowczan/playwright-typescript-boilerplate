import {
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
} from '@playwright/test';
import { DeviceTag } from '../config/devices';
import { ShortcutActionsFunctionsList } from '../shortcutActions/shortcutActions.type';
import { HomePage } from './home-page/home.page.type';
import { LoginPage } from './login-page/login.page.type';
import { NotFoundPage } from './not-found/not-found.page.type';

export type TestFunction = (
  args: PlaywrightTestArgs & PlaywrightTestOptions & AllPages & PlaywrightWorkerArgs & PlaywrightWorkerOptions,
) => void;

export type AllPages = {
  shortcutActions: ShortcutActionsFunctionsList;
  loginPage: LoginPage;
  homePage: HomePage;
  notFoundPage: NotFoundPage;
};

export type TestCase = {
  title: string;
  devices: DeviceTag[];
};

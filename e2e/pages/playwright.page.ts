import { test as playwrightBase } from '@playwright/test';
import { getShortcutActions } from '../shortcutActions/shortcutActions';
import { getHomePage } from './home-page/home.page.methods';
import { getLoginPage } from './login-page/login.page.methods';
import { getNotFoundPage } from './not-found/not-found.page.methods';
import { AllPages, TestCase, TestFunction } from './playwright.page.type';

export const createTitle = (testCase: TestCase): string => `${testCase.title} ${testCase.devices.join(' ')}`;

const playwrightTest = playwrightBase.extend<AllPages>({
  shortcutActions: async ({ page, browser }, use) => {
    await use(getShortcutActions({ page, browser }));
  },
  loginPage: async ({ page }, use) => {
    await use(getLoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(getHomePage(page));
  },
  notFoundPage: async ({ page }, use) => {
    await use(getNotFoundPage(page));
  },
});

const scenario = (testCase: TestCase, testFunction: TestFunction): void =>
  playwrightTest(createTitle(testCase), testFunction);

scenario.skip = (testCase: TestCase, testFunction: TestFunction) =>
  playwrightTest.skip(createTitle(testCase), testFunction);

scenario.only = (testCase: TestCase, testFunction: TestFunction) =>
  playwrightTest.only(createTitle(testCase), testFunction);

export { scenario };

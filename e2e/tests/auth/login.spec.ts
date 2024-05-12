import test from '@playwright/test';
import { DESKTOP_DEVICES_TAG } from '../../config/devices';
import { getFixtureSetUserExample } from '../../fixtures/user-example/get-fixture';
import { scenario } from '../../pages/playwright.page';

scenario({ title: 'Sign in', devices: [DESKTOP_DEVICES_TAG] }, async ({ loginPage, homePage }) => {
  test.setTimeout(20_000);
  const { user } = getFixtureSetUserExample();

  await loginPage.openUrl();
  await loginPage.assertPage();
  await loginPage.signIn(user.email, user.password);

  await homePage.assertPage();
});

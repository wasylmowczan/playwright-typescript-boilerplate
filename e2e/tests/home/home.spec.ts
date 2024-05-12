import test from '@playwright/test';
import { ALL_DEVICES_TAG, CHROME_DEVICE_TAG, SAFARI_DEVICE_TAG } from '../../config/devices';
import { getFixtureSetUserExample } from '../../fixtures/user-example/get-fixture';
import { scenario } from '../../pages/playwright.page';

scenario({ title: 'Assert home page', devices: [ALL_DEVICES_TAG] }, async ({ shortcutActions, homePage }) => {
  test.setTimeout(10_000);
  const { authPath } = getFixtureSetUserExample();
  await shortcutActions.fastSignIn(authPath);

  await homePage.openUrl();
  await homePage.assertPage();
});

scenario(
  { title: 'Assert help modal', devices: [CHROME_DEVICE_TAG, SAFARI_DEVICE_TAG] },
  async ({ shortcutActions, homePage }) => {
    test.setTimeout(10_000);
    const { authPath } = getFixtureSetUserExample();
    await shortcutActions.fastSignIn(authPath);

    await homePage.openUrl();
    await homePage.helpComponent.assertComponent();
  },
);

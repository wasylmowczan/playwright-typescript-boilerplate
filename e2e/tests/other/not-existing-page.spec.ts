import test from '@playwright/test';
import { ALL_DEVICES_TAG } from '../../config/devices';
import { scenario } from '../../pages/playwright.page';

scenario({ title: 'Not found page - 404', devices: [ALL_DEVICES_TAG] }, async ({ notFoundPage }) => {
  test.setTimeout(10_000);

  await notFoundPage.openUrl();
  await notFoundPage.assertPage();
});

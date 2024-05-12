import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { initLogger } from '../helpers/common';
import {
  ANDROID_MOBILE_DEVICE_GREP,
  ANDROID_MOBILE_DEVICE_NAME,
  ANDROID_TABLET_DEVICE_GREP,
  ANDROID_TABLET_DEVICE_NAME,
  CHROME_DEVICE_GREP,
  CHROME_DEVICE_NAME,
} from './devices';

initLogger({ debugMode: false });
const playwrightConfig: PlaywrightTestConfig = {
  testDir: '../tests',
  outputDir: '../test-results',
  forbidOnly: true,
  expect: {
    timeout: 60_000,
  },
  reporter: [['list'], ['html', { open: 'never', outputFolder: '../playwright-report' }]],
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: CHROME_DEVICE_NAME,
      grep: CHROME_DEVICE_GREP,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        viewport: { width: 1920, height: 1080 },
        permissions: ['clipboard-write', 'clipboard-read'],
        screenshot: 'only-on-failure',
      },
      dependencies: ['setup'],
    },
    {
      name: ANDROID_TABLET_DEVICE_NAME,
      grep: ANDROID_TABLET_DEVICE_GREP,
      use: {
        viewport: { width: 800, height: 1280 },
        permissions: ['clipboard-write', 'clipboard-read'],
        deviceScaleFactor: 4,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
      },
      dependencies: ['setup'],
    },
    {
      name: ANDROID_MOBILE_DEVICE_NAME,
      grep: ANDROID_MOBILE_DEVICE_GREP,
      use: {
        viewport: { width: 360, height: 800 },
        permissions: ['clipboard-write', 'clipboard-read'],
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
      },
      dependencies: ['setup'],
    },
  ],
};

export default playwrightConfig;

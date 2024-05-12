import { expect, Locator } from '@playwright/test';

export const assertTextEq = async (locator: Locator, text: string, { ignoreCase }: { ignoreCase?: boolean } = {}) => {
  await expect(locator).toHaveText(text, { ignoreCase });
  await expect(locator).toBeVisible();
};

export const assertTextContains = async (
  locator: Locator,
  text: string,
  { ignoreCase }: { ignoreCase?: boolean } = {},
) => {
  await expect(locator).toContainText(text, { ignoreCase });
  await expect(locator).toBeVisible();
};

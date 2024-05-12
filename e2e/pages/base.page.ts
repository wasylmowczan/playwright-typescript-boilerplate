import { expect, Page } from '@playwright/test';

export type BasePage = {
  openUrl(): Promise<void>;
  assertUrl(): Promise<void>;
};

export const getBasePage = (page: Page, url: string): BasePage => ({
  openUrl: async (): Promise<void> => {
    await page.goto(url);
  },
  assertUrl: async (): Promise<void> => {
    await page.waitForURL(url);
    expect(page.url()).toEqual(url);
  },
});

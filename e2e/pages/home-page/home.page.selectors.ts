import { Page } from '@playwright/test';

export const getTitleElement = (page: Page) => page.getByTestId('title');
export const getAccountsButtonElement = (page: Page) => page.getByTestId('accounts-button');
export const getActionsButtonElement = (page: Page) => page.getByTestId('actions-button');
export const getMobileActionsButtonElement = (page: Page) => page.getByTestId('mobile-actions-button');

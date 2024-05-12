import { Page } from '@playwright/test';

export const getStatusTextElement = (page: Page) => page.getByTestId('status-text');
export const getTitleElement = (page: Page) => page.getByTestId('title');
export const getDescriptionElement = (page: Page) => page.getByTestId('description');

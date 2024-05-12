import { Page } from '@playwright/test';

export const getHelpElement = (page: Page) => page.getByTestId('help-modal');
export const getHeadingElement = (page: Page) => page.getByTestId('help-heading-text');
export const getDescriptionElement = (page: Page) => page.getByTestId('help-description-text');
export const getCloseButtonElement = (page: Page) => page.getByTestId('help-close-button');

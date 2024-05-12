import { Page } from '@playwright/test';

export const getTitleElement = (page: Page) => page.getByTestId('title');
export const getEmailInputElement = (page: Page) => page.getByTestId('email-input');
export const getPasswordInputElement = (page: Page) => page.getByTestId('password-input');
export const getEmailTextElement = (page: Page) => page.getByTestId('email-label');
export const getPasswordTextElement = (page: Page) => page.getByTestId('password-label');
export const getLoginButtonElement = (page: Page) => page.getByTestId('login-button');

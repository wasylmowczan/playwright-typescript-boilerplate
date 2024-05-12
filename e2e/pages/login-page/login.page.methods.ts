import { expect, Page } from '@playwright/test';
import { APP_URLS } from '../../config/urls';
import * as dictionary from '../../dictionary/en/login.json';
import { assertTextEq } from '../../helpers/assertions';
import { getBasePage } from '../base.page';

import * as selectors from './login.page.selectors';
import { LoginPage } from './login.page.type';

const url = APP_URLS.login;

export const getLoginPage = (page: Page): LoginPage => {
  const base = getBasePage(page, url);

  return {
    ...base,

    assertPage: async (): Promise<void> => {
      await assertTextEq(selectors.getTitleElement(page), dictionary.title);
      await assertTextEq(selectors.getEmailInputElement(page), dictionary.email);
      await assertTextEq(selectors.getPasswordInputElement(page), dictionary.password);
      await base.assertUrl();
    },

    signIn: async (email: string, password: string) => {
      await selectors.getEmailInputElement(page).fill(email);
      await expect(selectors.getEmailInputElement(page)).toHaveValue(email);
      await selectors.getPasswordInputElement(page).fill(password);
      await expect(selectors.getPasswordInputElement(page)).toHaveValue(password);
      await selectors.getLoginButtonElement(page).click();
    },
  };
};

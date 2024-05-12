import { Page } from '@playwright/test';
import { getHelpComponent } from '../../components/help/help.methods';
import { MOBILE_DEVICES_LIST } from '../../config/devices';
import { APP_URLS } from '../../config/urls';
import * as dictionary from '../../dictionary/en/home.json';
import { assertTextEq } from '../../helpers/assertions';
import { doOnlyOnDevices } from '../../helpers/common';
import { getBasePage } from '../base.page';
import * as selectors from './home.page.selectors';
import { HomePage } from './home.page.type';

const url = APP_URLS.home;

export const getHomePage = (page: Page): HomePage => {
  const base = getBasePage(page, url);
  const helpComponent = getHelpComponent(page);

  return {
    ...base,
    helpComponent,

    assertPage: async () => {
      await assertTextEq(selectors.getAccountsButtonElement(page), dictionary.account);
      await assertTextEq(selectors.getTitleElement(page), dictionary.title);

      if (doOnlyOnDevices(MOBILE_DEVICES_LIST)) {
        await assertTextEq(selectors.getMobileActionsButtonElement(page), dictionary.actions);
      } else {
        await assertTextEq(selectors.getActionsButtonElement(page), dictionary.actions);
      }
      await base.assertUrl();
    },
  };
};

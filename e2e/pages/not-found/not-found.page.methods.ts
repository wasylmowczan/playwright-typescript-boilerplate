import { Page } from '@playwright/test';
import { APP_URLS } from '../../config/urls';
import * as dictionary from '../../dictionary/en/notFoundError.json';
import { assertTextEq } from '../../helpers/assertions';
import { getBasePage } from '../base.page';
import * as selectors from './not-found.page.selectors';
import { NotFoundPage } from './not-found.page.type';

const url = APP_URLS.notFound;

export const getNotFoundPage = (page: Page): NotFoundPage => {
  const base = getBasePage(page, url);

  return {
    ...base,

    assertPage: async () => {
      await assertTextEq(selectors.getTitleElement(page), dictionary.title);
      await assertTextEq(selectors.getStatusTextElement(page), dictionary.error);
      await assertTextEq(selectors.getDescriptionElement(page), dictionary.description);
      await base.assertUrl();
    },
  };
};

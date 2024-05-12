import { expect, Page } from '@playwright/test';
import * as dictionary from '../../dictionary/en/help.json';
import { assertTextEq } from '../../helpers/assertions';
import * as selectors from './help.selectors';
import { HelpComponent } from './help.type';

export const getHelpComponent = (page: Page): HelpComponent => {
  return {
    assertComponent: async () => {
      await assertTextEq(selectors.getHeadingElement(page), dictionary.title);
      await assertTextEq(selectors.getDescriptionElement(page), dictionary.description);
    },

    closeHelp: async () => {
      await selectors.getCloseButtonElement(page).click();
    },

    assertHelpIsClosed: async () => {
      await expect(selectors.getHelpElement(page)).not.toBeVisible();
    },
  };
};

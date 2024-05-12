import { Browser, Page } from '@playwright/test';

export type ShortcutActions = ({ page, browser }: { page: Page; browser: Browser }) => ShortcutActionsFunctionsList;

export type ShortcutActionsFunctionsList = {
  fastSignIn(authPath: string): Promise<void>;
};

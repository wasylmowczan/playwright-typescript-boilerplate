import { ShortcutActions } from './shortcutActions.type';

export const getShortcutActions: ShortcutActions = ({ page, browser }) => ({
  fastSignIn: async (authPath: string) => {
    const context = await browser.newContext({ storageState: authPath });
    await page.context().addCookies(await context.cookies());
  },
});

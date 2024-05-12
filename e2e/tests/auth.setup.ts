import { Page, test as setup } from '@playwright/test';
import { User } from '../fixtures/get-user-helper.type';
import { getFixtureSetUserExample } from '../fixtures/user-example/get-fixture';
import { getLoginPage } from '../pages/login-page/login.page.methods';

const authenticateUser = async (user: User, authPath: string, page: Page): Promise<void> => {
  /*
    Add signing in implementation using request and cookies
  */

  await page.context().storageState({ path: authPath });
};

setup('authenticate user-example', async ({ page }) => {
  const loginPage = getLoginPage(page);
  await loginPage.openUrl();

  const userFixedBalance = getFixtureSetUserExample();
  await authenticateUser(userFixedBalance.user, userFixedBalance.authPath, page);
});

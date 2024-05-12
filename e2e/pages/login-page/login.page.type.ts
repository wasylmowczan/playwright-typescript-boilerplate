import { BasePage } from '../base.page';

export type LoginPage = BasePage & {
  assertPage(): Promise<void>;
  signIn(email: string, password: string): Promise<void>;
};

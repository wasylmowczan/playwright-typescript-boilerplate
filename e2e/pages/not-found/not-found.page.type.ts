import { BasePage } from '../base.page';

export type NotFoundPage = BasePage & {
  assertPage(): Promise<void>;
};

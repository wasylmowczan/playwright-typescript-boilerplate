import { HelpComponent } from '../../components/help/help.type';
import { BasePage } from '../base.page';

export type HomePage = BasePage & {
  helpComponent: HelpComponent;
  assertPage(): Promise<void>;
};

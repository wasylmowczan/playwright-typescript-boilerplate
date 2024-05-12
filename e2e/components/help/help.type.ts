export type HelpComponent = {
  assertComponent(): Promise<void>;
  closeHelp(): Promise<void>;
  assertHelpIsClosed(): Promise<void>;
};

export class NotSupportedEnvError extends Error {
  public constructor(env: string) {
    super(`Env "${env}" not supported`);

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

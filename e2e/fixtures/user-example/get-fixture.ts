import { config } from '../../config/config';
import { NotSupportedEnvError } from '../../helpers/errors';
import { addPasswordToUser } from '../get-user-helper';
import { User } from '../get-user-helper.type';
import { userExampleAcc } from './user-acc';
import { userExampleDev } from './user-dev';

export const getFixtureSetUserExample = (): {
  user: User;
  authPath: string;
} => {
  if (config.env === 'dev') {
    return {
      user: addPasswordToUser(userExampleDev),
      authPath: `${config.baseTestPath}/.auth/user-example.json`,
    };
  }

  if (config.env === 'acc') {
    return {
      user: addPasswordToUser(userExampleAcc),
      authPath: `${config.baseTestPath}/.auth/user-example.json`,
    };
  }

  throw new NotSupportedEnvError(config.env);
};

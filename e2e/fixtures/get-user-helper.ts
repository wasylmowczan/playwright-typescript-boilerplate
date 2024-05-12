import { config } from '../config/config';
import { User } from './get-user-helper.type';

const passwords: { email: string; password: string }[] = JSON.parse(
  Buffer.from(config.fixtureUsers, 'base64').toString(),
).map((user: { email: string; password: string }) => ({
  ...user,
}));

const getPasswordFromFixture = (email: string): string => {
  const password = passwords.find((u) => u.email === email)?.password;

  if (!password) {
    throw new Error(
      `Cannot find password for user ${email}. Don't forget to update FIXTURE_USERS in .env after adding user to passwords.json`,
    );
  }

  return password;
};

export const addPasswordToUser = (user: User): User => {
  if (user.password) {
    return user;
  }

  const password = getPasswordFromFixture(user.email);
  user.password = password;

  return user;
};

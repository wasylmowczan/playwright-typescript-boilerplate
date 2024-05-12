## Structure

- `components` - (page object pattern) objects that represent components used on multiple pages
- `config` - playwright and general config files
- `dictionary` - dictionary with all text used in application
- `fixtures` - fixtures with for example, user data
- `helpers` - helper functions
- `pages` - (page object pattern) objects that represent pages
- `requests` - functions that allows to do request
- `shortcutActions` - functions that help prepare the state of the application (for example, by signing in, preparing
  cookies etc)
- `tests` - all .spec files

## Passwords for fixtures

If you are signing in to a user in your tests and if you don't want to create new user in each test run you can create
user and save it to a `fixtures` directory.

Remember, don't keep passwords in your code!

You can create files that are gitignored: `e2e/passwords.dev.json` `e2e/passwords.acc.json` In these json's files you
can have for example:

`[{ "email": "test.automation+444@gmail.com", "password": "example" }]`

Then use `npm run e2e:pass-acc` / `npm run e2e:pass-dev` to create base64 of these json files. This base64 save in
`E2E_FIXTURE_USERS` in `.env` file and in github/bitbucket environments.

And that's it. You can see that in `user-example` in `fixtures` the `addPasswordToUser` function loads passwords from
`E2E_FIXTURE_USERS` and saves them in `User` object.

## E2E Tests

- `npm run e2e:install` - To init playwright
- `npm run e2e:full` - To run tests on all devices
- `npm run e2e:fast` - To run tests on one desktop, mobile and tablet device
- `npm run e2e:debug` - To run tests on chrome with headless=false
- `npm run e2e:pass-acc` script should be used to convert `passwords.acc.json` to base64
- `npm run e2e:pass-dev` script should be used to convert `passwords.dev.json` to base64

import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const configSchema = z.object({
  baseTestPath: z.string().min(1),
  userEmail: z.object({
    base: z.string().min(1),
    domain: z.string().min(1),
  }),
  env: z.enum(['dev', 'acc']),
  baseUrl: z.string().min(1),
  apiUrl: z.string().min(1),
  fixtureUsers: z.string().min(1),
});

export const config = configSchema.parse({
  baseTestPath: 'e2e',
  userEmail: {
    base: 'test.automation',
    domain: '@tsh.io',
  },
  env: process.env.E2E_ENV,
  baseUrl: process.env.E2E_BASE_URL,
  apiUrl: process.env.E2E_API_URL,
  fixtureUsers: process.env.E2E_FIXTURE_USERS,
});

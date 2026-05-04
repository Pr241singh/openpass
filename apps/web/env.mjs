/* eslint-disable no-undef */
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().default("postgresql://postgres:your_secure_password_here@localhost:5432/openpass?schema=public"),
    GOOGLE_CLIENT_ID: z.string().min(1).default("local_dev_dummy_client_id"),
    GOOGLE_CLIENT_SECRET: z.string().min(1).default("local_dev_dummy_secret"),
    RESEND_API_KEY: z.string().min(1).default("re_local_dev_dummy"),
    EMAIL_FROM: z.string().min(1).default("OpenPass <tickets@openpass.app>"),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional().default("http://localhost:3002"),
  },
  // Next.js requires you to manually map the variables here
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})

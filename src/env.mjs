import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().nonempty(),
    DB_HOST: z.string().nonempty(),
    DB_USERNAME: z.string().nonempty(),
    DB_PASSWORD: z.string().nonempty(),
    DB_NAME: z.string().nonempty(),
    QSTASH_TOKEN: z.string().nonempty(),
    QSTASH_PUBLISH_URL: z.string().url().nonempty(),
    QSTASH_CURRENT_SIGNING_KEY: z.string().nonempty(),
    QSTASH_NEXT_SIGNING_KEY: z.string().nonempty(),
    IS_PRODUCTION: z.string().transform((s) => s === "production"),
    EDGE_CONFIG: z.string().url().nonempty(),
    RESEND_API_KEY: z.string().nonempty(),
    KV_REST_API_URL: z.string().url().nonempty(),
    KV_REST_API_TOKEN: z.string().nonempty(),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().nonempty(),
    NEXT_PUBLIC_IS_PRODUCTION: z.string().transform((s) => s === "production"),
  },
  runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    QSTASH_TOKEN: process.env.QSTASH_TOKEN,
    QSTASH_PUBLISH_URL: process.env.QSTASH_PUBLISH_URL,
    QSTASH_CURRENT_SIGNING_KEY: process.env.QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY: process.env.QSTASH_NEXT_SIGNING_KEY,
    IS_PRODUCTION: process.env.NODE_ENV,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NODE_ENV,
  },
});

import { createClient } from '@vercel/kv';
import { env } from './env.mjs';

export const kv = createClient({
  url: env.KV_REST_API_URL,
  token: env.KV_REST_API_TOKEN
});

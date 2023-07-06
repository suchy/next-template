import { Receiver } from '@upstash/qstash';
import { env } from './env.mjs';

export function publishMessage(
  urlOrTopic: string,
  payload: unknown,
  localUrls: string[]
) {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

  if (!env.IS_PRODUCTION) {
    for (const url of localUrls) {
      fetch(url, fetchOptions);
    }
    return;
  }

  const url = env.QSTASH_PUBLISH_URL + urlOrTopic;

  return fetch(url, {
    ...fetchOptions,
    headers: {
      ...fetchOptions.headers,
      Authorization: `Bearer ${env.QSTASH_TOKEN}`
    }
  });
}

export async function verifyIncomingMessage(
  headers: Headers,
  payload?: unknown
) {
  if (!env.IS_PRODUCTION) {
    return true;
  }

  const signature = headers.get('upstash-signature') || '';

  const r = new Receiver({
    currentSigningKey: env.QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: env.QSTASH_NEXT_SIGNING_KEY
  });

  const isValid = await r.verify({
    signature,
    body: JSON.stringify(payload)
  });

  return isValid;
}

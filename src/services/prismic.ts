import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

const baseUrl = `${
  process.env.PRISMIC_API_ENDPOINT || 'http://localhost:3000'
}/`;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(baseUrl, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}

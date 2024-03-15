import { hasher } from '../../src';

export default {
  async fetch(request: Request) {
    const testString = 'test';
    const hash = await hasher(testString, 'SHA-256');
    const data = {
      testString,
      hash,
    };

    return Response.json(data);
  },
} satisfies ExportedHandler;
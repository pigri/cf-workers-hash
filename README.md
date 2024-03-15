# Hash function for Cloudflare Workers

## How to use?

### Hasher
[Available hash functions](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#algorithm) 

```
import { hasher } from 'cf-workers-hash';
await hasher('test', 'SHA-256');
```

### How to test in local?
```
npm test
```

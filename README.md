# Hash function for Cloudflare Workers

## How to use?

Check the `example` directory.

### Supported hash functions
- SHA-1
- SHA-256
- SHA-384
- SHA-512
- MD5
- BASE64
- XXHASH32
- XXHASH64
- BCRYPT / BCRYPT-COMPARE
- WHIRLPOOL
- SHA3-224
- SHA3-256
- SHA3-384
- SHA3-512
- KECCAK224
- KECCAK256
- KECCAK384
- KECCAK512

```
import { sha1, sha256, sha384, sha512, base64, md5, xxhash64, xxhash32, bcrypt, bcryptCompare, whirlpool, sha3_512, sha3_224, sha3_256, sha3_384, keccak512, keccak384, keccak256, keccak224 } from 'cf-workers-hash';
await sha1('test');
```

### How to test in local?
```
npm test
```

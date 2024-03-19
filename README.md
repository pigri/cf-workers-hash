# Hash functions for Cloudflare Workers

[![NPM](https://nodei.co/npm/cf-workers-hash.png?stars&downloads)](https://nodei.co/npm/cf-workers-hash/)

![GitHub CI](https://github.com/pigri/cf-workers-hash/actions/workflows/test.yaml/badge.svg)

![NPM Publish](https://github.com/pigri/cf-workers-hash/actions/workflows/publish.yaml/badge.svg)

### What is this?
This is a simple hash function library for Cloudflare Workers. It supports the following hash functions:
- SHA-1 [WEBCRYPTO SUPPORTED](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
- SHA-256 [WEBCRYPTO SUPPORTED](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
- SHA-384 [WEBCRYPTO SUPPORTED](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
- SHA-512 [WEBCRYPTO SUPPORTED](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
- MD5 [WEBCRYPTO SUPPORTED](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
- BASE64 / BASE64-DECODE
- XXHASH32
- XXHASH64
- BCRYPT / BCRYPT-COMPARE
- WHIRLPOOL / WHIRLPOOL-DECODE
- SHA3-224
- SHA3-256
- SHA3-384
- SHA3-512
- KECCAK224
- KECCAK256
- KECCAK384
- KECCAK512
- MD6
- CRC32
- CRC32C

### How to install?
```
npm install cf-workers-hash
```

### How to use?

Check the `example` directory.

```
import { sha1, sha256, sha384, sha512, base64, base64Decode, md5, xxhash64, xxhash32, bcrypt, bcryptCompare, whirlpool, whirlpoolDecode, sha3_512, sha3_224, sha3_256, sha3_384, keccak512, keccak384, keccak256, keccak224, md6, crc32, crc32c } from 'cf-workers-hash';
await sha1('test');
```

### How to test in local?
```
npm test
```

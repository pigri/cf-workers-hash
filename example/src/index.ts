import { sha1, sha256, sha384, sha512, base64, md5, xxhash64, xxhash32, bcrypt, whirlpool, sha3_512, sha3_224, sha3_256, sha3_384, keccak512, keccak384, keccak256, keccak224 } from '../../dist';

export default {
  async fetch(_: Request) {
    const testString = 'test';
    const hashSha1 = await sha1(testString);
    const hashSha256 = await sha256(testString);
    const hashSha384 = await sha384(testString);
    const hashSha512 = await sha512(testString);
    const hashBase64 = await base64(testString);
    const hashMd5 = await md5(testString);
    const hashXxhash32 = await xxhash32(testString);
    const hashXxhash64 = await xxhash64(testString);
    const hashBcrypt = await bcrypt(testString, 10);
    const whirlpoolHash = await whirlpool(testString);
    const hashSha3_512 = await sha3_512(testString);
    const hashSha3_224 = await sha3_224(testString);
    const hashSha3_256 = await sha3_256(testString);
    const hashSha3_384 = await sha3_384(testString);
    const hashKeccak512 = await keccak512(testString);
    const hashKeccak384 = await keccak384(testString);
    const hashKeccak256 = await keccak256(testString);
    const hashKeccak224 = await keccak224(testString);

    const data = {
      testString,
      hashSha1,
      hashSha256,
      hashSha384,
      hashSha512,
      hashMd5,
      hashXxhash32,
      hashXxhash64,
      hashBase64,
      hashBcrypt,
      whirlpoolHash,
      hashSha3_512,
      hashSha3_224,
      hashSha3_256,
      hashSha3_384,
      hashKeccak512,
      hashKeccak384,
      hashKeccak256,
      hashKeccak224
    };

    return Response.json(data);
  },
} satisfies ExportedHandler;
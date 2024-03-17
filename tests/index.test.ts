import {
  sha1,
  sha256,
  sha384,
  sha512,
  base64,
  md5,
  xxhash64,
  xxhash32,
  bcrypt,
  bcryptCompare,
  whirlpool,
  sha3_512,
  sha3_224,
  sha3_256,
  sha3_384,
  keccak512,
  keccak384,
  keccak256,
  keccak224,
  whirlpoolDecode,
  base64Decode,
  md6,
  crc32,
  crc32c
} from '../dist';

test('hasher SHA-1', async () => {
  const result = await sha1('test');
  expect(result).toBe('a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');
});

test('hasher SHA-256', async () => {
  const result = await sha256('test');
  expect(result).toBe('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
});

test('hasher SHA-384', async () => {
  const result = await sha384('test');
  expect(result).toBe('768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9');
});

test('hasher SHA-512', async () => {
  const result = await sha512('test');
  expect(result).toBe('ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff');
});

test('hasher xxhash32', async () => {
  const result = await xxhash32('test');
  expect(result).toBe('951a9862');
});

test('hasher xxhash64', async () => {
  const result = await xxhash64('test');
  expect(result).toBe('560adeac057039e1');
});

test('hasher base64', async () => {
  const result = await base64('test');
  expect(result).toBe('dGVzdA==');
});

test('hasher base64 decode', async () => {
  const result = await base64Decode('dGVzdA==');
  expect(result).toBe('test');
});

test('hasher md5', async () => {
  const result = await md5('test');
  expect(result).toBe('098f6bcd4621d373cade4e832627b4f6');
});

test('hasher bcrypt', async () => {
  const result = await bcrypt('test', 5);
  expect(result).toBeTruthy();
  expect(result).toContain("$2a$05$")
});

test('hasher bcrypt compare', async () => {
  const result = await bcrypt('test', 5);
  const compare = await bcryptCompare('test', result);
  expect(result).toBeTruthy();
  expect(result).toContain("$2a$05$")
  expect(compare).toBe(true)
});

test('hasher bcrypt compare false', async () => {
  const result = await bcrypt('test', 5);
  const compare = await bcryptCompare('test123', result);
  expect(result).toBeTruthy();
  expect(result).toContain("$2a$05$")
  expect(compare).toBe(false)
});

test('hasher whirlpool', async () => {
  const result = await whirlpool('test');
  expect(result).toBe('QjkxM0Q1QkJCOEU0NjFDMkM1OTYxQ0JFMEVEQ0RBREZEMjlGMDY4MjI1Q0VCMzdEQTZERUZDRjg5ODQ5MzY4RjhDNkMyRUI2QTRDNEFDNzU3NzVEMDMyQTBFQ0ZERkU4NTUwNTczMDYyQjY1M0ZFOTJGQzdCOEZCM0I3QkU4RDY=');
});

test('hasher whirlpool decode', async () => {
  const result = await whirlpoolDecode('QjkxM0Q1QkJCOEU0NjFDMkM1OTYxQ0JFMEVEQ0RBREZEMjlGMDY4MjI1Q0VCMzdEQTZERUZDRjg5ODQ5MzY4RjhDNkMyRUI2QTRDNEFDNzU3NzVEMDMyQTBFQ0ZERkU4NTUwNTczMDYyQjY1M0ZFOTJGQzdCOEZCM0I3QkU4RDY=');
  expect(result).toBe('B913D5BBB8E461C2C5961CBE0EDCDADFD29F068225CEB37DA6DEFCF89849368F8C6C2EB6A4C4AC75775D032A0ECFDFE8550573062B653FE92FC7B8FB3B7BE8D6');
});

test('hasher sha3_224', async () => {
  const result = await sha3_224('test');
  expect(result).toBe('3797bf0afbbfca4a7bbba7602a2b552746876517a7f9b7ce2db0ae7b');
});

test('hasher sha3_256', async () => {
  const result = await sha3_256('test');
  expect(result).toBe('36f028580bb02cc8272a9a020f4200e346e276ae664e45ee80745574e2f5ab80');
});

test('hasher sha3_384', async () => {
  const result = await sha3_384('test');
  expect(result).toBe('e516dabb23b6e30026863543282780a3ae0dccf05551cf0295178d7ff0f1b41eecb9db3ff219007c4e097260d58621bd');
});

test('hasher sha3_512', async () => {
  const result = await sha3_512('test');
  expect(result).toBe('9ece086e9bac491fac5c1d1046ca11d737b92a2b2ebd93f005d7b710110c0a678288166e7fbe796883a4f2e9b3ca9f484f521d0ce464345cc1aec96779149c14');
});

test('hasher keccak512', async () => {
  const result = await keccak512('test');
  expect(result).toBe('1e2e9fc2002b002d75198b7503210c05a1baac4560916a3c6d93bcce3a50d7f00fd395bf1647b9abb8d1afcc9c76c289b0c9383ba386a956da4b38934417789e');
});

test('hasher keccak384', async () => {
  const result = await keccak384('test');
  expect(result).toBe('53d0ba137307d4c2f9b6674c83edbd58b70c0f4340133ed0adc6fba1d2478a6a03b7788229e775d2de8ae8c0759d0527');
});

test('hasher keccak256', async () => {
  const result = await keccak256('test');
  expect(result).toBe('9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658');
});

test('hasher keccak224', async () => {
  const result = await keccak224('test');
  expect(result).toBe('3be30a9ff64f34a5861116c5198987ad780165f8366e67aff4760b5e');
});

test('hasher md6', async () => {
  const result = await md6('test');
  expect(result).toBe('93c8a7d0ff132f325138a82b2baa98c12a7c9ac982feb6c5b310a1ca713615bd');
});

test('hasher crc32', async () => {
  const result = await crc32('test');
  expect(result).toBe(3632233996);
});

test('hasher crc32c', async () => {
  const result = await crc32c('test');
  expect(result).toBe(2258662080);
});
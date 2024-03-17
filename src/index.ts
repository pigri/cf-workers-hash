/* @typescript-eslint/no-unused-functions */

import * as bcryptjs from 'bcryptjs';
import * as md5js from 'js-md5';
import * as xxh from 'xxhashjs';
import * as whirlpooljs from 'whirlpool-hash';
import * as sha3 from 'js-sha3';
import md6Hash from 'md6-hash';
import { Crc32 } from '@aws-crypto/crc32';
import { Crc32c } from '@aws-crypto/crc32c';

function cryptoHasher(hashType: string) {
  return async (input: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest(hashType, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };
}

export function md5(input: string): Promise<string> {
  return Promise.resolve(md5js.md5(input));
}

export function base64(input: string): Promise<string> {
  return Promise.resolve(btoa(input));
}

export function base64Decode(input: string): Promise<string> {
  return Promise.resolve(atob(input));
}

export const sha1 = cryptoHasher('SHA-1');
export const sha256 = cryptoHasher('SHA-256');
export const sha384 = cryptoHasher('SHA-384');
export const sha512 = cryptoHasher('SHA-512');

export async function bcrypt(input: string, saltRounds: number): Promise<string> {
  const salt = await bcryptjs.genSalt(saltRounds);
  return await bcryptjs.hash(input, salt);
}

function xxhasher(input: string, hashType: string): Promise<string> {
  const seed = 0xabcd;
  switch (hashType) {
    case 'xxhash32':
      return Promise.resolve(xxh.h32(input, seed).toString(16));
    case 'xxhash64':
      return Promise.resolve(xxh.h64(input, seed).toString(16));
    default:
      return Promise.reject('Invalid hash type');
  }
}

export function xxhash32(input: string): Promise<string> {
  return xxhasher(input, 'xxhash32');
}

export function xxhash64(input: string): Promise<string> {
  return xxhasher(input, 'xxhash64');
}

export async function bcryptCompare(input: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(input, hash);
}

export async function whirlpool(input: string): Promise<string> {
  const hasher = new whirlpooljs.Whirlpool();
  const hash = hasher.getHash(input)
  return base64(whirlpooljs.encoders.toHex(hash.toString()).toUpperCase());
}

export async function whirlpoolDecode(input: string): Promise<string> {
  const hasher = new whirlpooljs.Whirlpool();
  return whirlpooljs.encoders.fromBase64(input);
}

export async function md6(input: string, size: number = 256, key: string = "", levels: number = 64): Promise<string> {
  return md6Hash(input,size, key, levels)
}

export async function crc32(input: string): Promise<number> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  return Promise.resolve((new Crc32()).update(data).digest());
}

export async function crc32c(input: string): Promise<number> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  return Promise.resolve((new Crc32c()).update(data).digest());
}

export const sha3_512 = (input: string): Promise<string> => Promise.resolve(sha3.sha3_512(input));
export const sha3_224 = (input: string): Promise<string> => Promise.resolve(sha3.sha3_224(input));
export const sha3_256 = (input: string): Promise<string> => Promise.resolve(sha3.sha3_256(input));
export const sha3_384 = (input: string): Promise<string> => Promise.resolve(sha3.sha3_384(input));
export const keccak512 = (input: string): Promise<string> => Promise.resolve(sha3.keccak512(input));
export const keccak384 = (input: string): Promise<string> => Promise.resolve(sha3.keccak384(input));
export const keccak256 = (input: string): Promise<string> => Promise.resolve(sha3.keccak256(input));
export const keccak224 = (input: string): Promise<string> => Promise.resolve(sha3.keccak224(input));



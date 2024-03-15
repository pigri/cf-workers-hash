declare module 'cf-workers-hash' {
  function hasher(input: string, hashType: string): Promise<string>;
  export = hasher;
}
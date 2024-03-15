const hasher = async (input: string, hashType: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest(hashType, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

declare module 'cf-workers-hash' {
  function hasher(input: string, hashType: string): Promise<string>;
  export = hasher;
}

module.exports = hasher;
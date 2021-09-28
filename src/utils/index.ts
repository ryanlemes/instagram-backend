function Utils() {
  const encode64 = (buffer: Buffer) => {
    if (!buffer) {
      throw new Error('invalid buffer');
    }
    return buffer.toString('base64');
  };

  const decode64 = (textEncoded: string): Buffer => {
    if (textEncoded === null || textEncoded === '') {
      throw new Error('invalid text encoded');
    }
    return Buffer.from(textEncoded, 'base64');
  };

  return {
    encode64,
    decode64,
  };
}

export default Utils;

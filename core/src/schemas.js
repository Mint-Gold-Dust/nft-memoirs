const rootSchema = {
  $schema: 'http://json-schema.org/draft/2020-12/schema',
  title: 'NFT Memoirs',
  description: 'The root for written NFT memoirs.',
  type: 'object',
  properties: {
    memoirs: {
      type: 'array',
      title: 'memoirs',
      items: {
        type: 'string',
        minLength: 63,
      },
    },
  },
};

const memoirSchema = {
  $schema: 'http://json-schema.org/draft/2020-12/schema',
  title: 'Memoir',
  description: 'A written memory about a certain event or personal motive.',
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'title',
      maxLength: 120,
    },
    content: {
      type: 'string',
      title: 'content',
      maxLength: 420,
    },
    nft: {
      type: 'object',
      properties: {
        tokenAddress: {
          type: 'string',
          title: 'tokenAddress',
          pattern: '^0x[a-fA-F0-9]{40}$',
        },
        tokenId: {
          type: 'number',
          minimum: 0,
          title: 'tokenId',
        },
      },
    },
  },
  required: ['title', 'content'],
};

export { memoirSchema, rootSchema };

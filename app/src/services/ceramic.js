const createMemoirs = (viewerId, content, schemaID) => {
  return viewerId.client.tileLoader.create(content, { schemaID });
};

const createSchema = (viewerId, schemaObject) => {
    return viewerId.client.tileLoader.create(schemaObject);
  };

const loadDoc = (viewerId, id) => {
  return  viewerId.client.tileLoader.load(id);
};

export {
  createMemoirs,
  createSchema,
  loadDoc,
};

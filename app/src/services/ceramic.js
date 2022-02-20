const createMemoirs = (viewerId, content, schemaID) => viewerId.client.tileLoader.create(content, { schemaID });

const createSchema = (viewerId, schemaObject) => viewerId.client.tileLoader.create(schemaObject);

const loadDoc = (viewerId, id) => viewerId.client.tileLoader.load(id);

export { createMemoirs, createSchema, loadDoc };

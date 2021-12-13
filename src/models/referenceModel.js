const connection = require('../connection/index');

const getAll = async () => {
  const db = await connection();
  const references = await db.collection('references').find().toArray();
  return references;
};

module.exports = {
  getAll,
};
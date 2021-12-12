const connection = require('../connection/index');

const createNewUser = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.collection('users').insertOne({ name, email, password });
  return { _id: inserted.insertedId, name, email, password };
};

module.exports = {
  createNewUser,
};
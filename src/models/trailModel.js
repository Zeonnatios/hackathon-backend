const connection = require('../connection/index');

const createNewTrail = async (trail) => {
  const db = await connection();
  const inserted = await db.collection('trails').insertOne(trail);
  return { _id: inserted.insertedId, ...trail };
};

module.exports = {
  createNewTrail,
};
const connection = require('../connection/index');

const createNewTrail = async (trail) => {
  const db = await connection();
  const inserted = await db.collection('trails').insertOne(trail);
  return { _id: inserted.insertedId, ...trail };
};

const findTrailsList = async () => {
  const db = await connection();
  const trailsList = await db.collection('trails').find().toArray();
  return trailsList;
};

module.exports = {
  createNewTrail,
  findTrailsList,
};
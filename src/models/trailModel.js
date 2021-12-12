const { ObjectId } = require('mongodb');
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

const deleteTrail = async (id) => {
  if (!ObjectId.isValid(id)) { return null; }

  const db = await connection();
  await db.collection('trails').deleteOne(
    { _id: ObjectId(id) },
  );

  return { _id: id };
};

module.exports = {
  createNewTrail,
  findTrailsList,
  deleteTrail,
};
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

const findById = async (id) => {
  const validId = ObjectId.isValid(id);
  if (!validId) return null;
  const db = await connection();
  const trail = await db.collection('trails').findOne(ObjectId(id));
  return trail;
};

module.exports = {
  createNewTrail,
  findTrailsList,
  findById,
};
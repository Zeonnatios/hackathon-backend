const { ObjectId } = require('mongodb');
const connection = require('../connection/index');

const createNewTrail = async (trail) => {
  const db = await connection();
  const inserted = await db.collection('trails').insertOne(trail);
  return { _id: inserted.insertedId, ...trail };
};

const findTrailsList = async () => {
  const db = await connection();
  const trailsList = await db.collection('trails').find(
    {},
  ).toArray();
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

const findById = async (id) => {
  const validId = ObjectId.isValid(id);
  if (!validId) return null;
  const db = await connection();
  const trail = await db.collection('trails').findOne(ObjectId(id));
  return trail;
};

const editTrail = async ({ id, newTrail }) => {
  if (!ObjectId.isValid(id)) { return null; }

  const db = await connection();
  const update = await db.collection('trails').updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: newTrail,
    },
  );

  return update;
};

const findByTechnology = async (IdTechnology) => {
  const db = await connection();
  const trails = await db.collection('trails').find({ 'technologies._id': IdTechnology }).toArray();
  return trails;
};

const updateSteps = async ({ id, steps: userSteps }) => {
  if (!ObjectId.isValid(id)) { return null; }
  
  const db = await connection();
  const update = await db.collection('trails').updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: {
        steps: userSteps,
      },
    },
    );
  return update;
};

const updateTrailLikes = async (trailId, likedArray) => {
  const db = await connection();
  const { acknowledged } = await db.collection('trails').updateOne({
    _id: ObjectId(trailId),
  }, {
    $set: { likes: [...likedArray] },
  });
  return acknowledged;
};

module.exports = {
  createNewTrail,
  findTrailsList,
  deleteTrail,
  findById,
  editTrail,
  findByTechnology,
  updateSteps,
  updateTrailLikes,
};
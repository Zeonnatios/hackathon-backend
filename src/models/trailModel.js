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

<<<<<<< HEAD
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
=======
const findByTechnology = async (technology) => {
  const db = await connection();
  const trails = await db.collection('trails').findOne({ technologies: technology });
  return trails;
>>>>>>> f083ff97cc0978fcfbc771a9983786c32683d1cd
};

module.exports = {
  createNewTrail,
  findTrailsList,
  deleteTrail,
  findById,
<<<<<<< HEAD
  editTrail,
=======
  findByTechnology,
>>>>>>> f083ff97cc0978fcfbc771a9983786c32683d1cd
};
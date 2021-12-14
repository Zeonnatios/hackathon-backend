const { ObjectId } = require('mongodb');
const connection = require('../connection/index');

const createNewUser = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.collection('users').insertOne({ name, email, password });
  return { _id: inserted.insertedId, name, email, password };
};

const getUserByEmail = async (user) => {
  const db = await connection();
  const findUser = await db.collection('users').findOne({
    email: user.email,
    password: user.password,
  });
  if (!findUser) return null;
  
  const { password, ...userWithoutPassword } = findUser;

  return userWithoutPassword;
};

const updateUser = async ({ id, name, email, password, technologies }) => {
  if (!ObjectId.isValid(id)) { return null; }

  const db = await connection();
  await db.collection('users').updateOne(
    { _id: ObjectId(id) }, 
    { $set: { name, email, password, technologies } },
  );

  return { _id: id, name, email, password, technologies };
};

const updateUserByName = async ({ userName, _id }) => {
  const db = await connection();
  await db.collection('users').updateOne(
    { name: userName }, 
    { $push: { 'trails.myTrails': _id } },
  );
};

const verifyName = async (name) => {
  const db = await connection();
  const findUser = await db.collection('users').findOne({
    name,
  });
  if (!findUser) return false;
  
  return true;
};

const getAll = async () => {
  const db = await connection();
  const allUsers = await db.collection('users').find(
    {},
  ).toArray();
  
  return allUsers;
};

const getUserByid = async (id) => {
  const db = await connection();
  const user = await db.collection('users').findOne({
    _id: ObjectId(id),
  });
  
  return user;
};

const updateUserLikes = async (userId, likedArray) => {
  const db = await connection();
  const { acknowledged } = await db.collection('users').updateOne({
    _id: ObjectId(userId),
  },
  {
    $set: {
      'trails.likedTrails': likedArray,
    },
  });
  return acknowledged;
};

module.exports = {
  createNewUser,
  getUserByEmail,
  updateUser,
  updateUserByName,
  verifyName,
  getAll,
  getUserByid,
  updateUserLikes,
};
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

module.exports = {
  createNewUser,
  getUserByEmail,
};
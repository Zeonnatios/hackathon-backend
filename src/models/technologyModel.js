const connection = require('../connection/index');

const findTechnologies = async () => {
  const db = await connection();
  const technologies = await db.collection('technologies').find(
    {},
  ).toArray();
  return technologies;
};

module.exports = {
  findTechnologies,
};
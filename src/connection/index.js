require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb+srv://superuser:superuser@hackathon.kzbjx.mongodb.net/'
  + 'hackathon?retryWrites=true&w=majority' || process.env.MONGO_DB_URL;

const DB_NAME = 'hackathon' || process.env.DB_NAME;

let db = null;

const connection = () => (
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    }));

module.exports = connection;
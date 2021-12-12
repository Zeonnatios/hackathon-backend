require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { usersRoute } = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/', [usersRoute]);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

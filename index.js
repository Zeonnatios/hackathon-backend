require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { usersRoute, trailsRoute, technologyRoute } = require('./src/routes');
const { errorHandler } = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/', [usersRoute, trailsRoute, technologyRoute]);

app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

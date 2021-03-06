require('dotenv').config();
const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger/swagger.json');

const { usersRoute, trailsRoute, technologyRoute, referencesRoute } = require('./src/routes');

const { errorHandler } = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/', [usersRoute, trailsRoute, technologyRoute, referencesRoute]);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fileUpload = require('express-fileupload');
const { readdirSync } = require('fs');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(logger('dev'));
app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Udah kebanyakan request a, cobain ntar lagi ye..',
});

app.use('/api/', rateLimiter);

app.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Tesis API v1.0',
  });
});

// buat render routes
readdirSync('./src/routes').map((route) => {
  app.use('/api/v1.0', require(`./src/routes/${route}`));
});

// middleware error cuy
app.use(require('./middlewares/error-middleware'));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

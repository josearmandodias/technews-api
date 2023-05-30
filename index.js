const express = require('express');
const cors = require('cors');
const router = require('./src/router');

const app = express();

require('dotenv').config();

app.use(cors())
app.use(express.static('src/public'));

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
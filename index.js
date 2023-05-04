const express = require('express');
const cors = require('cors');
const router = require('./src/router');

const app = express();

require('dotenv').config();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(router);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
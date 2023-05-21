const { Router } = require('express');
const mainController = require('./controllers/mainController');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

router.get('/:subject', mainController.ai);

module.exports = router;
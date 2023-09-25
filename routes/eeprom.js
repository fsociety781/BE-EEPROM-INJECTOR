const express = require('express');
const router = express.Router();

const EepromController = require('../controllers/EepromController');
const HistorysController = require('../controllers/HistorysController')

router.get('/eeprom', EepromController.index);
router.post('/eeprom', EepromController.store);
router.patch('/eeprom/:id', EepromController.update);

router.post('/history', HistorysController.store)

module.exports = router;

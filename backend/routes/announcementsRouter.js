const express = require('express');
const router = express.Router();
const announcementsController = require('../controllers/announcementsController');

router.get('/', announcementsController.getAnnouncements);
router.put('/', announcementsController.updateAnnouncements);

module.exports = router;

const express = require('express');
const router = express.Router();
const announcementsController = require('../controllers/announcementsController');

// Handle the routes related to announcements
router.get('/', announcementsController.getAnnouncements);
router.put('/', announcementsController.updateAnnouncements);

module.exports = router;

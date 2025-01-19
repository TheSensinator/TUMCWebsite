const express = require('express');
const router = express.Router();
const { getExampleData } = require('../controllers/exampleController');

// Default route
router.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

// Example API route
router.get('/api/data', getExampleData);

module.exports = router;

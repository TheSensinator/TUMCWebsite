const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const { getAnnouncements, updateAnnouncements } = require("../controllers/announcementsController");
const authMiddleware = require("../middleware/authMiddleware");

// Example hardcoded admin credentials (use environment variables in production)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH; // Store hashed password in .env

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Log the incoming request data
    console.log(`Received login request: username=${username}`);

    // Validate username and password
    if (username !== ADMIN_USERNAME) {
        console.log(`Invalid username: ${username}`);
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!isMatch) {
        console.log(`Invalid password attempt for username: ${username}`);
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create a JWT token and send it as a response
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log(`Login successful for username: ${username}`);
    return res.status(200).json({ token, message: 'Login successful!' });
});

// Example Protected Route
router.get('/dashboard', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Expecting "Bearer <token>"

    // Log the token presence
    console.log('Received request for /dashboard');
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(`Token is valid for user: ${decoded.username}`);
        res.json({ message: `Welcome, ${decoded.username}!` });
    } catch (err) {
        console.log('Invalid token');
        res.status(401).json({ message: 'Invalid token' });
    }
});

module.exports = router;

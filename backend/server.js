const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const logger = require('./middlewares/logger');
app.use(logger);

// Body parser for JSON
app.use(express.json());

// Static files
app.use(express.static('public'));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

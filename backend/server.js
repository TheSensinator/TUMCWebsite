const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const adminRouter = require('./routes/admin');
const app = express();

dotenv.config(); // Load environment variables

const corsOptions = {
    origin: 'https://tonicaumc.com',  // Only allow requests from this domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true,  // Allow cookies to be sent with requests
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example middleware for sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api/admin', adminRouter);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

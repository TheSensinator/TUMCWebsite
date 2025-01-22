const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const adminRouter = require('./routes/admin');
const app = express();

app.use('/api/admin', adminRouter);


dotenv.config(); // Load environment variables

app.use(cors({
    origin: 'https://tonicaumc.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

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

// Example routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock user (replace with database)
const admin = { username: 'admin', passwordHash: bcrypt.hashSync('supersecret', 10) };

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === admin.username && bcrypt.compareSync(password, admin.passwordHash)) {
    // Generate a token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

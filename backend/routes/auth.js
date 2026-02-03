import express from 'express';
const router = express.Router();

// Mock Login
router.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  // In a real app, verify password hash
  // For demo:
  if (username && password) {
    res.json({
      success: true,
      user: {
        id: '123',
        username,
        role,
        name: role === 'student' ? 'Rahul Kumar' : 'Prof. Sharma'
      },
      token: 'mock-jwt-token'
    });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

export default router;

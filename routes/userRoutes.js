const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');

router.post('/register', registerUser); // Register route
router.post('/login', authUser); // Login route
router.get('/:id', protect, getUser); // Protected route

module.exports = router;

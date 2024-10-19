const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { addExpense, getUserExpenses, getOverallExpenses } = require('../controllers/expenseController');
const protect = require('../middlewares/authMiddleware');

router.post(
    '/',
    [
        check('totalAmount', 'Total amount is required').isNumeric(),
        check('participants', 'Participants are required').isArray(),
    ],
    protect,
    addExpense
);
router.get('/user/:userId', protect, getUserExpenses);
router.get('/overall', protect, getOverallExpenses);

module.exports = router;

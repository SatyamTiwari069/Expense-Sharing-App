const getUserExpenses = async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.page) || 1;

    try {
        const expenses = await Expense.find({ 'participants.userId': req.params.userId })
            .skip(pageSize * (page - 1))
            .limit(pageSize);

        const count = await Expense.countDocuments({ 'participants.userId': req.params.userId });
        res.json({ expenses, page, pages: Math.ceil(count / pageSize) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

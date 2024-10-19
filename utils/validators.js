const validateExpenseInput = (totalAmount, participants) => {
    let totalPercentage = 0;

    for (const participant of participants) {
        if (participant.method === "percentage") {
            totalPercentage += participant.share;
        }
    }

    if (totalPercentage !== 100) {
        return "Percentage split must total 100%";
    }
    return null;
};

module.exports = { validateExpenseInput };

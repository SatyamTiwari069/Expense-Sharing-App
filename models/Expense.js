const mongoose = require('mongoose');



const participantSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    share: { type: Number, required: true },
    method: { type: String, required: true },  // "equal", "exact", "percentage"
});

const expenseSchema = new mongoose.Schema({
    payerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalAmount: { type: Number, required: true },
    participants: [participantSchema],
    createdAt: { type: Date, default: Date.now },
});

const Expense = mongoose.model('Expense', expenseSchema);
expenseSchema.index({ 'participants.userId': 1 });
module.exports = Expense;

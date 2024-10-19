const express = require('express');
const dotenv = require('.env');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

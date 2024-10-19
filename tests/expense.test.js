const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Expense Endpoints', () => {
    afterAll(() => {
        mongoose.connection.close();
    });

    it('should add an expense', async () => {
        const res = await request(app)
            .post('/api/expenses')
            .set('Authorization', 'Bearer YOUR_TOKEN_HERE')
            .send({
                payerId: 'USER_ID_HERE',
                totalAmount: 100,
                participants: [
                    { userId: 'USER_ID_HERE', share: 50, method: 'exact' },
                    { userId: 'ANOTHER_USER_ID_HERE', share: 50, method: 'exact' }
                ]
            });
        expect(res.statusCode).toEqual(201);
    });
});

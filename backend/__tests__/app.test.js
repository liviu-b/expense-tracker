const request = require('supertest');
const app = require('../app');

describe('Test the app.js', () => {

    let server;

    beforeAll(() => {
        server = app.listen(3000);  // Start the server before running tests
    });

    afterAll((done) => {
        server.close(done);  // Close the server after running all tests
    });

    it('should respond with a 200 status on the base route', async () => {
        const res = await request(server).get('/api/v1');  // Test your base route
        expect(res.statusCode).toBe(200);
    });

    it('should use the JSON middleware', async () => {
        const res = await request(server)
            .post('/api/v1/someEndpoint')  // Replace with an actual endpoint
            .send({ key: 'value' });

        expect(res.headers['content-type']).toMatch(/json/);
        expect(res.body).toHaveProperty('key');
    });
});

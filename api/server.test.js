const request = require('supertest');

const server = require('./server');

describe('GET /', () => {
    it ('should return 200 http status code', () => {
        return request (server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
        });
    });

    test ("should return{ message: 'Authentication server!'}", () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.body).toEqual({ message: 'Authentication server!' });
            expect(response.body.message).toBe('Authentication server!');
        });
    });
});
const request = require('supertest');
const db = require('../database/dbConfig');
const Users = require('./auth-model');
const server = require('../api/server');

describe('auth-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('POST /api/auth/register', () => {
        it ('should respond with 201 OK', async () => {
            await request(server)
            .post('/api/auth/register')
            .send({ username: 'brenda', password: '12345' })
            .then(res => {
                expect(res.status).toBe(201)
            });
        });

        it ('should return with JSON', async () => {
            await request(server)
            .post('/api/auth/register')
            .send({ username: 'brenda', password: '12345' })
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });

    describe('POST /api/auth/login', () => {
        it ('should respond with 401 without sending token', async () => {
            await Users.add({ username: 'brenda', password: '12345' });
            await request(server)
            .post('/api/auth/login')
            .send({ username: 'brenda', password: '12345' })
            .then(res => {
                expect(res.status).toBe(401);
            });
        });

        it ('should return with JSON', async () => {
            await Users.add({ username: 'brenda', password: '12345' });
            await request(server)
            .post('/api/auth/login')
            .send({ username: 'brenda', password: '12345' })
            .then (res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });
});

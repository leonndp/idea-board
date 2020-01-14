const request = require('supertest')
const app = require('../../../server')
const Idea = require('../../../models/Idea')

test('should send get request', () => {
    app.get('/', (req, res) => {
        expect(res.body).toBe('')
    })
})
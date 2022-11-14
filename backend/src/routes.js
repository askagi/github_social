const express = require('express');
const { login, createUser } = require('./controllers/user');

const routes = express.Router()
// const routes = express()

routes.post('/user/login', login)
routes.post('/user/create', createUser)

module.exports = { routes }
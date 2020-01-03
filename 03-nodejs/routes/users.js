const express = require('express');
const userCtrl = require('../controllers/user.ctrl');
const app = express();

app.get('/users', userCtrl.getUsers);

module.exports = app;
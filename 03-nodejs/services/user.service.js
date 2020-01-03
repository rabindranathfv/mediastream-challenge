'use strict';

const Debug = require('debug');
const _ = require('underscore');

// models
const UserModel = require('../models/User');

const getUsers = async(req, res, start, limit) => {

    res.json({ ok: true });

}

module.exports = {
    getUsers
}
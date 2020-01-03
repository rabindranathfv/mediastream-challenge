'use stric';

const userService = require('../services/user.service');

const getUsers = async(req, res) => {
    // route /users?limit=<value>&start=<value>
    let start = req.query.start || 0;
    start = Number(start);
    let limit = req.query.limit || 15;
    limit = Number(limit);
    const users = await userService.getUsers(req, res, start, limit);
}

module.exports = {
    getUsers
}
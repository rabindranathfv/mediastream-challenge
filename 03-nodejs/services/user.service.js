'use strict';

const { Parser } = require('json2csv');
// models
const UserModel = require('../models/User');

const getUsers = async(req, res, start, limit) => {

    UserModel.find({}, '_id name email')
        .skip(start)
        .limit(limit)
        .exec((err, usersLists) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: `not users exist`,
                    err
                });
            }

            let fields = ['_id', 'name', 'email'];
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(usersLists);
            res.attachment('usersList.csv');
            res.status(200).send(csv);
            /*
            UserModel.countDocuments({}, (err, numUsers) => {
                res.json({
                    ok: true,
                    message: 'get list of users successfully',
                    amountUsers: numUsers,
                    user: usersLists
                });
            });
            */
        });

}

module.exports = {
    getUsers
}
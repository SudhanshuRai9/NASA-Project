const { launches } = require('../../models/launches.model');

function getAllLaunches(req, res) {
    // launches.values is converted to array-like object bcoz arrays and objects are valid json in js
    return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
    getAllLaunches,
}
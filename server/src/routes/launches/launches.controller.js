const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    // launches.values is converted to array-like object bcoz arrays and objects are valid json in js
    return res.status(200).json(getAllLaunches);
}

module.exports = {
    httpGetAllLaunches,
}
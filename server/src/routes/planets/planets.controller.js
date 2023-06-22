const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
    try {
        return await res.status(200).json(await getAllPlanets());
    } catch(err) {
        res.send(err);
    }
}

module.exports = {
    httpGetAllPlanets,
}
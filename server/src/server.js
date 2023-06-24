const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

// Creating server like this helps to not only respond to 'http' requests but also to other types of connections.
const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
    
    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`)
    });
};

startServer();
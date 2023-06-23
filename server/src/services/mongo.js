const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://Sudhanshu:Sudh!2000@cluster0.rqsaf.mongodb.net/nasa?retryWrites=true&w=majority"

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect(MONGO_URL);
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}
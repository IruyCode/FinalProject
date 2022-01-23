// dados para o login no MongoDB online
// email: aluno24325@ipt.pt
// password: MongoDB3!
// database: Project0
// De momento fazendo o comando "node BackEnd/server.js", não é possível ligar ao Cluster "Cluster0" no MongoDB (minutos 20-22 do video)

// For using mongodb
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL")
        process.exit(1);
    }
}

module.exports = connectDB;

import express from 'express'
import configDotenv from 'dotenv';
import connect_DB from './database/db.js';
import userRoutes from './routes/user.routes.js';

// * Database and Dotenv Configuration ^ //
configDotenv.config();
connect_DB();
// ^ Server Configuration ^ // 
const server = express();
const port = process.env.port;

// ^ Middleware ^ //
server.use(express.json())

// ^ Routes ^ //
server.use("/users", userRoutes)
// ^ Server Listen ^ //
server.listen(1000, () => {
    console.log(`Server Listining on PORT : ${port}`)
})
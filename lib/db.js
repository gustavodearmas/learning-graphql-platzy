"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { DATABASE_URL } = process.env;

let connection;

async function connectDB(name_collection) {
    if (connection) return connection;
    try {
        const uri = DATABASE_URL;
        let db;
        db = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection = db.db("GraphQL").collection(name_collection);
    } catch (e) {
        console.error("Error al conectar la base de datos: ", e);
        process.exit(1);
    }
    return connection;
}

module.exports = connectDB;

"use strict";
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { DATABASE_URL } = process.env;

let connection;

async function connectDB() {
    if (connection) return connection;
    try {
        const uri = DATABASE_URL;
        let db;
        db = new MongoClient(uri
        );
        
        connection = db.db("GraphQL");
        
    } catch (e) {
        console.error("Error al conectar la base de datos: ", e);
        process.exit(1);
    }
    return connection;
}

module.exports = connectDB;
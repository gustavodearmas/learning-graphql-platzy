'use strict'
const { MongoClient } = require('mongodb')

let connection

async function main (name_coletion) {
    if (connection) return connection;
    
    try {
        const uri = "mongodb+srv://admin:admin@cluster0.sczxv6y.mongodb.net/?retryWrites=true&w=majority";
        let db
        db = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        connection = db.db("GraphQL").collection(name_coletion)
        // data = await client.db("GraphQL")
    } catch (e) {
        console.error("Error al conectar la base de datos: ", e);
        process.exit(1)
    }

    return connection
}

module.exports = main
// async function listDataBase(client){
//     const list = await client.db().admin().listDataBase();
// }


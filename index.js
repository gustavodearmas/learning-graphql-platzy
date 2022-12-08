"use strict";
const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const fs = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers.js");
require('dotenv').config()


const app = express();
const PORT = process.env.port || 3000;

// Definiendo el esquema
const typeDefs = fs.readFileSync(
    join(__dirname, "lib", "schema.graphql"),
    "utf-8"
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    })
);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/graphql`);
});

// Este el e codigo para usar en la terminal - Importar { graphql } desde graphql
// const rootValue = resolvers;
// const source = '{ un_revolver_por_cada_query }';
// graphql({ schema, source, rootValue }).then((response) => {
//   console.log(response);
// });

//CORRECIÓN DE ERRORES
// instarlar npm i standard -D
// correr el comando npm run lint-fix



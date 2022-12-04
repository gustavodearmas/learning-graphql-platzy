"use strict";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import fs from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";
import resolvers from "./lib/resolvers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

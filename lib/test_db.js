import express from "express";
import Cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import ConectBD from "../lib/db.js";
import resolvers from './resolvers.js'
import fs from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.port || 3000;

// Definiendo el esquema
const typeDefs = fs.readFileSync(
    join(__dirname, "schema.graphql"),
    "utf-8"
);

dotenv.config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const app = express();
app.use(Cors());

app.use(express.json());
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await ConectBD();
  await server.start();
  server.applyMiddleware({ app });
  console.log("¡ Servidor encendido correctamente !");
});

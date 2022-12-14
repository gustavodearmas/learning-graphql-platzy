"use strict";
const queries = require("./queries.js")
const mutation = require("./mutation.js")
const types = require("./types.js")

module.exports = {
    Query: queries,
    Mutation: mutation,
    ...types
}

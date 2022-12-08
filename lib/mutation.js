"use strict";
const connectDB = require("./db.js");
const name_collection = "products";

module.exports = {
    createProduct: async (root, { input }) => {
        const defaults = {
            description: "default",
        };
        const newProduct = { ...defaults, ...input };
        try {
            db = await connectDB(name_collection);
            product = await db.insertOne(newProduct);
            newProduct._id = product.insertedId;
        } catch (error) {
            console.error(error);
        }
        return newProduct;
    },
};

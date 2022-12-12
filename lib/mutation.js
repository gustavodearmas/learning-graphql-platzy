"use strict";
const connectDB = require("./db.js");
const { ObjectId } = require("mongodb");
const name_collection = "products";

module.exports = {
    createProduct: async (root, { input }) => {
        const defaults = {
            description: "default",
        };
        const newProduct = { ...defaults, ...input };
        let product;
        let db;
        try {
            db = await connectDB(name_collection);
            product = await db.insertOne(newProduct);
            newProduct._id = product.insertedId;
        } catch (error) {
            console.error(error);
        }
        return newProduct;
    },
    editProduct: async (root, { _id, input }) => {
        let db;
        let course;
        try {
            db = await connectDB(name_collection);
            await db.updateOne({ _id: ObjectId(_id) }, { $set: input });
            course = await db.findOne({ _id: ObjectId(_id) });
        } catch (error) {
            console.error(error);
        }
        return course;
    },
    deleteProduct: async (root, { _id }) => {
        let product;
        let db;
        let retuned;
        try {
            db = await connectDB(name_collection);
            retuned = await db.findOne({ _id: ObjectId(_id) });
            product = await db.deleteOne({ _id: ObjectId(_id) });
        } catch (e) {
            console.error(e);
        }
        return retuned;
    },
};

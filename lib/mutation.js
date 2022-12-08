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
        try {
            db = await connectDB(name_collection);
            product = await db.insertOne(newProduct);
            newProduct._id = product.insertedId;
        } catch (error) {
            console.error(error);
        }
        return newProduct;
    },
    deleteProduct: async (root, {_id})=>{
        let product;
        try{
            db = await connectDB(name_collection);
            console.log("dee")
            product = await db.deleteOne({ _id: ObjectId(_id) });
            newProduct._id = product.insertedId;
        }catch(e){
            console.error(e);
        }
        return true
    }
};

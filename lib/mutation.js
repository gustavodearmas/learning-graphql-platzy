"use strict";
const connectDB = require("./db.js");
const { ObjectId } = require("mongodb");
const errorHandler = require("./errorHandler.js")
const collection_products = "products";
const collection_invoice = "invoice";

module.exports = {
    // PRODUCTS
    createProduct: async (root, { input }) => {
        const defaults = {
            description: "default",
        };
        const newProduct = { ...defaults, ...input };
        let product;
        let db;
        try {
            db = await connectDB();
            product = await db
                .collection(collection_products)
                .insertOne(newProduct);
            newProduct._id = product.insertedId;
        } catch (error) {
            errorHandler(error)
        }
        return newProduct;
    },
    editProduct: async (root, { _id, input }) => {
        let db;
        let product;
        try {
            db = await connectDB();
            await db
                .collection(collection_products)
                .updateOne({ _id: ObjectId(_id) }, { $set: input });
            product = await db.findOne({ _id: ObjectId(_id) });
        } catch (error) {
            errorHandler(error)
        }
        return product;
    },
    deleteProduct: async (root, { _id }) => {
        let product;
        let db;
        let retuned;
        try {
            db = await connectDB();
            retuned = await db
                .collection(collection_products)
                .findOne({ _id: ObjectId(_id) });
            product = await db
                .collection(collection_products)
                .deleteOne({ _id: ObjectId(_id) });
        } catch (e) {
            errorHandler(e)
        }
        return retuned;
    },

    // PRODUCTS

    createInvoice: async (root, { input }) => {
        const newInvoice = input;
        let invoice;
        let db;
        try {
            db = await connectDB();
            invoice = await db
                .collection(collection_invoice)
                .insertOne(newInvoice);
            newInvoice._id = invoice.insertedId;
        } catch (error) {
            errorHandler(error)
        }
        return newInvoice;
    },
    addProductInvoice: async (root, { productID, invoiceID }) => {
        let product;
        let invoice;
        let db;
        try {
            db = await connectDB();
            product = await db
                .collection(collection_products)
                .findOne({ _id: ObjectId(productID) });
            invoice = await db
                .collection(collection_invoice)
                .findOne({ _id: ObjectId(invoiceID) });
            if (!product || !invoice) throw new Error("Error_____");
            await db
                .collection(collection_invoice)
                .updateOne(
                    { _id: ObjectId(invoiceID) },
                    { $addToSet: { products: ObjectId(productID) } }
                );
        } catch (error) {
            errorHandler(error)
        }
        return invoice;
    },
};

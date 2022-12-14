const connectDB = require("./db.js");
const { ObjectId } = require("mongodb");
const errorHandler = require("./errorHandler.js")
const collection_products = "products";
const collection_invoice = "invoice";

module.exports = {
    // PRODUCTS
    getProducts: async () => {
        let db;
        let products = [];
        try {
            db = await connectDB();
            products = db.collection(collection_products).find({}).toArray();
        } catch (error) {
            console.log("j")
            errorHandler(error)
        }
        return products;
    },
    getProductID: async (root, args) => {
        let db;
        let product = [];
        try {
            db = await connectDB(collection_products);
            product = await db.findOne({ _id: ObjectId(args._id) });
        } catch (error) {
            errorHandler(error)
        }
        return product;
    },
    // INVOICE
    getInvoices: async () => {
        let db;
        let invoice = [];
        try {
            db = await connectDB();
            invoice = await db.collection(collection_invoice).find({}).toArray();
        } catch (error) {
            errorHandler(error)
        }
        return invoice;
    },
    getInvoiceID: async (root, args) => {
        let db;
        let invoice = [];
        try {
            db = await connectDB();
            invoice = await db.collection(collection_invoice).findOne({ _id: ObjectId(args._id) });
        } catch (error) {
            errorHandler(error)
        }
        return invoice;
    },

};

const connectDB = require("./db.js");
const { ObjectId } = require("mongodb");
const name_collection = "products";

module.exports = {
    getProducts: async () => {
        let db;
        let products = [];
        try {
            db = await connectDB(name_collection);
            products = await db.find({}).toArray();
        } catch (error) {
            console.error(error);
        }
        return products;
    },
    getProductID: async (root, args) => {
        let db;
        let product = [];
        try {
            db = await connectDB(name_collection);
            product = await db.findOne({ _id: ObjectId(args._id) });
        } catch (error) {
            console.error(error);
        }
        return product;
    },
};

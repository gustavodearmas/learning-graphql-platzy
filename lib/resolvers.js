'use strict'
const main = require('./db.js')
// import { ObjectId } from "mongodb";


module.exports = {
    Query: {
        getProducts: async () => {
            let db
            let products = []
            try  {
                db = await main("products")
                products = await db.find({}).toArray();
            } catch (error) {
                console.error(error);
            }

            return products;
        },
        getProductID: async (root, args) => {
            let db
            let product = [];
            try {
                db = await main("products")
                product = await db.find({}).toArray();
                product.filter((product) => product._id === args._id);
            } catch (error) {
                console.error(error);
            }
            return product.pop();
        },
    },
};



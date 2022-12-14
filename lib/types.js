const connectDB = require("./db.js");
const { ObjectId } = require("mongodb");
const collection_products = "products";

module.exports = {
    Invoice: {
      products: async ({ products }) => {
        console.log("_: ", products)
        let db
        let productsData
        let ids
        try {
          db = await connectDB()
          ids = products ? products.map(id => ObjectId(id)) : []
          productsData = ids.length > 0
            ? await db.collection(collection_products).find(
              { _id: { $in: ids } }
            ).toArray()
            : []
        } catch (error) {
          console.error(error)
        }
  
        return productsData
      }
    }
  }
// connection to our database
require('dotenv').config();

// import our modules and connect do Database
const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

// function to import data to our database
const importData = async () => {
    try {
        // delete all the products from our database currently
        await Product.deleteMany({});
        // insert everything that is inside our productsData
        await Product.insertMany(productsData)

        console.log("Data imported successfully")

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

importData();
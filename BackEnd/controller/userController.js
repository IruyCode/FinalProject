const db = require("../config/db");

const getAllUsers = async (req, res) => {
    try{
        const collection  = await db.getMongoCollection("test","products");
        
        const result = await collection.find().toArray()
            console.log(result)
        res.status(200).json(result);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}
module.exports = {
    getAllUsers
};
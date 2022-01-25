require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express();
// *** PORT 3010 pq o front vai ser na porta 3000 !***
// app.get('/',(req,res)=>{
//     res.send("Teste de Servidor !");
// })

app.use(express.json())

// now we create or routes
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`À escuta na porta: ${PORT}`))
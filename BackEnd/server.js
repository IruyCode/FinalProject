require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/usersRoutes');
connectDB();

const app = express();
// *** PORT 3010 pq o front vai ser na porta 3000 !***
// app.get('/',(req,res)=>{
//     res.send("Teste de Servidor !");
// })

app.use(express.json())


// now we create or routes
app.use('/api/product', productRoutes);

// ja funciona , devolve vazio por n tem nenhum ainda
 app.use('/api/SingUp', userRoutes);

 app.use('/api/login', userRoutes);



const PORT = process.env.PORT || 3011;
app.listen(PORT, () => console.log(`À escuta na porta: ${PORT}`))
require('dotenv').config();
const express = require('express');

const app = express();
// *** PORT 5000 pq o front vai ser na porta 3000 !***
app.get('/',(req,res)=>{
    res.send("Teste de Servidor !");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Server Running on Port "+PORT))
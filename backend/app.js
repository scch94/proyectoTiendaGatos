const express=require("express");
const app = express();

//aqui aseguramos q entienda json 
app.use(express.json())

//importar rutas 
const productos=require("./routes/products")

app.use("/api",productos)

module.exports=app
//this file has a variable (app) which has the functionality of express, the name used is for consistency

//en app mostrare las cosas que de verdad voy a incluir en app
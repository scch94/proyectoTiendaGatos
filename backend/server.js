const app=require("./app")
//Seteamos el archivo de configuracion definimos la ubicacion del archivo config
const dotenv=require("dotenv");
dotenv.config({path: 'backend/config/config.env'})

//llamamos al server 
const server=app.listen(process.env.PORT,()=>{
    console.log(`servidor iniciado en el puerto :${process.env.PORT} en modo :${process.env.NODE_ENV}`)
})


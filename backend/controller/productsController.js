//controlador de productos
//              {pedir algo, responde algo, realiza una accion despues}      
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        succes:true,
        message:"en esta ruta ud va a poder ver todos los productos"
    })
}
//cada controllador debe tener una ruta 
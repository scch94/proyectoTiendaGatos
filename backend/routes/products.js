const express=require("express")
//el objeto express me permite crear un enrutador para esto us router  
const router=express.Router();
//traemos la respuesta json desde el controlador 
const {getProducts} =require("../controller/productsController")
//establecemos desde que ruta queremos ver el producto
router.route('/productos').get(getProducts)

module.exports=router;
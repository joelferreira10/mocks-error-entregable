import express from 'express'
import './model/connection.js';
import productRouter from './router/products.router.js'
import { errorHadler } from './middleware/errorhandler.js';
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/products',productRouter)
app.use(errorHadler)
app.listen(8080,()=>{console.log("server ok, port 8080");})
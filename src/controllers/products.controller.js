import { productService,productServiceManual } from "../service/products.service.js";
import HttpResponse from "../utils/http.response.js";
import CustomError from "../utils/customError.js";
import { generateProductErrorInfo } from "../utils/generateProductsErrorInfo.js";
import { httpStatus } from "../utils/http.response.js";
const httpResponse=new HttpResponse()
export const productsController=async(req,res,next)=>{
    try {
        const {cant}=req.query
        const response=await productService(cant)
        if(!response)return httpResponse.notFound(res,"Products Not Found")
        return res.send(response)
    } catch (error) {
        next(error.message)
    }
}

export const productsControllerManual=async(req,res,next)=>{
    try {
        const {title,description,code,price,stock,category,thumbnails}=req.body
        console.log(title);
        if(!title || !description || !code || !price || !stock || !category){
            console.log("paso por aca");
            return CustomError.createError({
                name:"Products creation error",
                cause:generateProductErrorInfo(req.body),
                message:"Error Trying to create Product",
                code:httpStatus.NOT_FOUND
            })
        }
        const prod=await productServiceManual(req.body)
        console.log("prod controller",prod);
        res.json(prod)
    } catch (error) {
        next(error.message)
    }
}
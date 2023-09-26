import { ProductModel } from "../model/products.model.js";
import { generateProducts } from "../utils/faker.js";
import HttpResponse from "../utils/http.response.js";
const httpResponse=new HttpResponse()
export const productService=async(cant=50)=>{
try {
    const products=[]
    for (let index = 0; index < cant; index++) {
        let product=generateProducts()
        products.push(product)
    }
    return products
} catch (error) {
   throw new Error("Product not found")
}
}

export const productServiceManual=async(obj)=>{
    try {
        console.log("prod service",obj);
        const products=[]
        products.push(obj)
        return products
    } catch (error) {
        throw new Error("Product not found")
    }
}
import {Schema,model}from 'mongoose'

const collection="productMocks"

const schemaProducts=new Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    stock:Number
})

export const ProductModel=model(collection,schemaProducts)
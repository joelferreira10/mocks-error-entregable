export const generateProductErrorInfo=(product)=>{
    return `properties were incloplete or not valid
    List of required properties:
    * title: needs to be a String, received   ${product.title}
    *description: needs to be a String,received   ${product.description}
    *code: needs to be a String,received   ${product.code}
    *price: needs to be a Number,received   ${product.price}
    *category: needs to be a String,received   ${product.category}
    *stock: needs to be a Number,received   ${product.title}
    *thumbnails: needs to be a String,received   ${product.thumbnails}
        ` 
}
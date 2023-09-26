import {fakerES as faker} from '@faker-js/faker'


export const generateProducts=()=>{
    return{
        title:faker.commerce.product(),
        description:faker.commerce.productDescription(),
        code:faker.commerce.isbn({ separator: '' }),
        price:faker.commerce.price(),
        category:faker.commerce.department(),
        stock:faker.commerce.price({min:1,max:200, dec:0}),
        thumbnails:[]
    }
}
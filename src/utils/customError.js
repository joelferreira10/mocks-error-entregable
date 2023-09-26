export default class CustomError{
    static createError({name="Error",cause,message,code}){
        console.log(cause);
        const error=new Error(message,{cause})
        error.name = name;
        error.code  = code || "ERR_CUSTOM";
        throw error
    }
}
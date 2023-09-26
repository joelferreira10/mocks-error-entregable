import HttpResponse from "../utils/http.response.js"
const httpoResponse=new HttpResponse()
export const errorHadler=(error,req,res,next)=>{
    return httpoResponse.notFound(res,error.message)
}
export const httpStatus={
    OK:200,
    NOT_FOUND:404,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    INTERNAL_SERVER_ERROR:500

}

export default class HttpResponse{
    ok(res,data){
        return res.status(httpStatus.OK).json({
            status:200,
            message:"success",
            data:data
        })
    }
    notFound(res,data){
        return res.status(httpStatus.NOT_FOUND).json({
            status:404,
            message:"NOT FOUND",
            Error:data
        })
    }
    unauthorized(res,data){
        return res.status(httpStatus.UNAUTHORIZED).json({
            status:401,
            message:"UNAUTHORIZED",
            Error:data
        })
    }
    forbidden(res,data){
        return res.status(httpStatus.FORBIDDEN).json({
            status:403,
            message:"FORBIDDEN",
            Error:data
        })
    }
    serverError(res,data){
        return res.status(httpStatus.OK).json({
            status:500,
            message:"Internal Server Error",
            Error:data
        })
    }

}
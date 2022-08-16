const { StatusCodes } = require('http-status-codes')


const errorHandler = async (err,req,res,next)=>{
    if (err.code==='ERR_BAD_REQUEST'){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'The weather Information for one or more of the requested cities does not exist'})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}

module.exports=errorHandler
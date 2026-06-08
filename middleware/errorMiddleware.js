const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
 
    res.status(err.statusCode).json({
       success: false,
       message: err.message || "Server Error"
    })
 }
 
 module.exports = errorHandler
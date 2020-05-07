module.exports = (req, res, next) => {
    const {authorization} = req.headers;
    const password = process.env.API_SECRET;
    if(authorization === API_SECRET){
        next();
    }else{
        res.status(403).json({
            you:"have no power"
        })
    }
}
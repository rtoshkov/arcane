function isUser() {
    return (req,res,next) => {
        if (!req.user){
            res.status(400).json('Not authorized - please login')
        } else {
            next();
        }
    }
}

module.exports = {
    isUser,
}

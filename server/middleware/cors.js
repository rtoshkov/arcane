module.exports = () => (req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'X-Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST', 'GET', 'PUT', 'DELETE', 'HEAD', 'OPTIONS');
    next();
}
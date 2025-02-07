const checkToken = (req, res, next) => {
    console.log('middleware checkToken');

    next();
};




module.exports = {
    checkToken
}
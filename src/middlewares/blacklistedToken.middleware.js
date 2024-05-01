const userModel = require('../model/userSchema.js');

const blacklistedToken = async (req, res, next) => {

    const token = req.headers["authorization"];
    try {
        const user = await userModel.findOne({ _id: new Object(req.userID) });
        // console.log(user);
        if (user.blacklistToken == token) {
            return res.status(401).send('You are logged out, Please login again to generate new token');
        }
    } catch (err) {
        console.log(err);
        return res.status(401).send('Unauthorized access for the user while logging out- in blacklist middleware');
    }
    next();
}

module.exports= blacklistedToken;
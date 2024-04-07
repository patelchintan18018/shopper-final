const jwt = require("jsonwebtoken");
const User = require("../models/User")

const authMiddleware = async(req,res,next) => {

    const token = req.header("Authorization").split(" ")[1];

    if(!token){
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        // console.log(token)
        //here in decode , will get data object that we are passing during creation of token
        const decode = jwt.verify(token, "secret-ecom");
        // console.log(decode);

        const UserData = await User.findOne({_id : decode.user.id}).select({password:0, cartdata:0, });
        // console.log(UserData);
        req.user = UserData;
        req.token = token;
        req.userID = UserData._id;
        next();

    } catch (error) {
        res.status(401).json({ success: false, message: "token is not valid" })
    }
}

module.exports = authMiddleware;
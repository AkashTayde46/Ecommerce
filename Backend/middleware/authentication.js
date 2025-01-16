const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")
const User = require("../models/userModels")
const { JWT_SECRET } = require("../config/config");
//to allow functionality to login user 
exports.isAuthenticatedUser = catchAsyncError(async(req, res, next)=>{
const {token} = req.cookies;
console.log(token);
if(!token){
    return next(new ErrorHandler("Please login this to access this resource", 401))
}
const decodeData = jwt.verify(token, JWT_SECRET);
req.user = await User.findById(decodeData.id);

next()
}
);
//
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403)
            );
        }
        next(); // Call next() only when the user's role is authorized
    };
};

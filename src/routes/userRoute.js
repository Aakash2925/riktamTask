const express = require('express')
const userControl = require('../controller/userController.js');
const jwtAuth = require('../middlewares/auth.middleware.js');
const blacklistedToken = require('../middlewares/blacklistedToken.middleware.js');

const userRouter = express.Router();
// Route for registering the user
userRouter.post('/register', (req, res, next) => {
    userControl.register(req, res, next);
});
// Route for logging user into the Application
userRouter.post('/login', (req, res, next) => {
    userControl.login(req, res, next);
});
// Route for loggin out of the Application
userRouter.get('/logout', jwtAuth, blacklistedToken, (req, res, next) => {
    userControl.logout(req, res, next);
});
//To update details of the alreadyregistered user
userRouter.post('/update', jwtAuth, (req, res, next) => {
    userControl.updateUserDetails(req, res, next);
})


module.exports =userRouter;
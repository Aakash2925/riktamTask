const express = require('express');
const groupControl= require('../controller/groupController.js');
const jwtAuth = require('../middlewares/auth.middleware.js');
const groupRouter = express.Router();
//Router to add self to the group ( can happen only when the person is admin)
groupRouter.get('/addSelf', jwtAuth, (req, res, next) => {
    groupControl.addSelf(req, res, next);
})
//Router to leave the group
groupRouter.delete('/removeSelf', jwtAuth, (req, res, next) => {
    groupControl.delSelf(req, res, next);
})
//Router to add any user ( can only be done by admin )
groupRouter.post('/addUser', jwtAuth, (req, res, next) => {
    groupControl.addUser(req, res, next);
})
//Router to remove any user from the group ( can only be done by admin )
groupRouter.delete('/removeUser', jwtAuth, (req, res, next) => {
    groupControl.delUser(req, res, next);
})
//Router for searching user in the group (can be done by both admin and normal user)
groupRouter.get('/searchUser', jwtAuth, (req, res, next) => {
    groupControl.searchUser(req, res, next);
})
module.exports =groupRouter;
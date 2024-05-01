const groupHelper = require('../helper/groupHelper.js');


const addSelf = async (req, res, next) => {
    try {
        const userID = req.userID;
        // console.log(userID);
        const user = await groupHelper.findUser(userID);
        const isPresent = await groupHelper.findUserInGroup(userID);
        if (isPresent) {
            return res.status(200).send('You are alreayd present in the group');
        }
        // console.log(user);
        if (user.admin) {
            const userAdded = await groupHelper.addUser(userID, userID);
            res.status(201).send("You have Joined the Group Admin :)");
        } else {
            res.status(400).send('You have to be admin for joining the group OR ask admin to add you to the group');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while adding Self to the Group Chat');
    }
}


const delSelf = async (req, res, next) => {
    try {
        const userID = req.userID;
        console.log(userID);
        const user = await groupHelper.findUserInGroup(userID);
        console.log(user);
        if (user) {
            const delUserSelf = await groupHelper.removeUser(userID);
            return res.status(201).send("You left the Group!");
        } else {
            return res.status(201).send("You are not there in the group");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while leaving the chat');
    }
}


const addUser = async (req, res, next) => {
    try {
        const userID = req.userID;
        const user = await groupHelper.findUser(userID);
        if (user.admin) {
            const userToBeAddedID = req.body.id;
            const userAdded = await groupHelper.addUser(userID, userToBeAddedID);
            res.status(201).send(userAdded);
        } else {
            res.status(400).send('You have to be admin for adding a new user to the group');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while adding the user by admin');
    }
}


const delUser = async (req, res, next) => {
    try {
        const userID = req.userID;
        const user = await groupHelper.findUser(userID);
        if (user.admin) {
            const userToBeRemoved = req.body.id; // No need to check whether this id person is there or not as admin can  only delete if the person is added 
            const userRemoved = await groupHelper.removeUser(userToBeRemoved);
            res.status(201).send(userRemoved);
        } else {
            res.status(200).send("You are not admin. You cannot remove any user");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while removing the user by admin');
    }
}

const searchUser=async (req, res, next)=> {
    try {
        const userID = req.userID;
        const searchID = req.body.id;
        const searchedUser = await groupHelper.search(userID, searchID);
        return res.status(200).send(searchedUser);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while searching the user');
    }
}

module.exports = {
    addSelf,
    delSelf,
    addUser,
    delUser,
    searchUser,
};
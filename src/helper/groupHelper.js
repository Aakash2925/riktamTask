const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const groupModel = require("../model/groupSchema.js");
const userModel = require("../model/userSchema.js");


const findUser=async (userID)=> {
    try {
        return await userModel.findById(userID);
    } catch (err) {
        console.log(err);
    }
}


const findUserInGroup=async (userID)=> {
    try {
        return await groupModel.findOne({ user: new ObjectId(userID) });
    } catch (err) {
        console.log(err);
    }
}



const addUser=async (userID, userToBeAdded)=> {
    try {
        const newUser = new groupModel({ admin: new ObjectId(userID), user: new ObjectId(userToBeAdded) })
        const addedUser = await newUser.save();
        return addedUser;
    } catch (err) {
        console.log(err);
    }
}
const removeUser=async (userID) =>{
    try {
        const userDeleted = await groupModel.deleteOne({ user: new Object(userID) });
        return userDeleted
    } catch (err) {
        console.log(err);
    }
}

const search=async (userID, searchID)=> {
    try {
        const userInGrp = await groupModel.findOne({ user: searchID });
        if (userInGrp) {
            const user = await userModel.findById(searchID);
            return user;
        } else {
            return 'No such user present in the group'
        }
    } catch (err) {
        console.log(err);
    }
}

    

module.exports ={
    addUser,
    findUser,
    findUserInGroup,
    removeUser,
    search,
};
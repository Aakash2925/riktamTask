const { ObjectId } = require("mongodb");
const chatMode = require("../model/chatSchema.js");
const mongoose = require("mongoose");
const userModel = require("../model/userSchema.js");
const findUser=async(userID)=> {
    try {
        return await userModel.findOne({ _id: new ObjectId(userID) });
    } catch (err) {
        console.log(err);
    }
}
const findMsg=async (msgID) =>{
    try {
        return await chatModel.findOne({ _id: new ObjectId(msgID) });
    } catch (err) {
        console.log(err);
    }
}

const addMessage=async (userID, username, text, timestamp)=> {
    try {
        const msgAdd = new chatModel({ userID: userID, username: username, text: text, timestamp: timestamp });
        const savedMsg = await msgAdd.save();
        return savedMsg;
    } catch (err) {
        console.log(err);
    }
}

const deleteMessage=async (userID, msgID)=> {
    try {
        const delMsg = await chatModel.deleteOne({ _id: new ObjectId(msgID), userID: new Object(userID) });
        return delMsg;
    } catch (err) {
        console.log(err);
    }
}

const likeMsg=async (userID, msgID)=> {
    try {
        const msg = await chatModel.findById(msgID);
        if (msg.likes.includes(userID)) {
            return msg;
        } else {
            msg.likes.push(userID);
            const savedMsg = await msg.save();
            return savedMsg;
        }

    } catch (err) {
        console.log(err);
    }
}


const commentMsg=async (userID, msgID, comment)=>{
    try {
        const msg = await chatModel.findById(msgID);
        const user = await userModel.findById(userID);
        msg.comment.push({ name: user.name, comment: comment });
        const addedComment = await msg.save();
        return addedComment;
    } catch (err) {
        console.log(err);
    }
}


const search=async (userID, id)=> {
    try {
        const arr = await chatModel.find({ userID: new ObjectId(id) }).exec();
        return arr;
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    findUser,
    findMsg,
    addMessage,
    deleteMessage,
    likeMsg,
    commentMsg,
    search
}

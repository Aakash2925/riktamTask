const chatHelper = require('../helper/chatHelper.js')



const addMsg = async (req, res, next) => {
    try {
        const userID = req.userID;
        // console.log(userID);
        const { text } = req.body;
        const user = await chatHelper.findUser(userID);
        const username = user.name;
        // console.log(user.name);
        const timestamp = new Date();
        const msgAdded = await chatHelper.addMessage(userID, username, text, timestamp);
        return res.status(200).send(msgAdded);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while texting in the group');
    }
}




const deleteMsg = async (req, res, next) => {
    try {
        const userID = req.userID;
        const msgID = req.body.id;
        const msgPresent = await chatHelper.findMsg(msgID);
        //Check that whether the user is trying to del his/her own msg from the group
        if (msgPresent.userID == userID) {
            const deletedMsg = await chatHelper.deleteMessage(userID, msgID);
            return res.status(200).send(deletedMsg);
        } else {
            return res.status(400).send("You cannot delete other's msgs in this chat");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while deleting msg in the group');
    }
}

const likeMsg = async (req, res, next) => {
    try {
        const userID = req.userID;
        const msgID = req.body.id;
        const likeMsg = await chatHelper.likeMsg(userID, msgID);
        return res.status(200).send(likeMsg);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while liking a message');
    }
}


const commentMsg = async (req, res, next) => {
    try {
        const userID = req.userID;
        const msgID = req.body.id;
        const comment = req.body.comment;
        const commentMsg = await chatHelper.commentMsg(userID, msgID, comment);
        return res.status(200).send(commentMsg);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while commenting on a message');
    }
}



const searchChat = async (req, res, next) => {
    try {
        const userID = req.userID;
        const id = req.body.id;
        const chatsArr = await chatHelper.search(userID, id);
        return res.status(200).send(chatsArr);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error occured while searching the users chat');
    }
}
 
module.exports={
    addMsg,
    deleteMsg,
    likeMsg,
    commentMsg,
    searchChat,
}
const mongoose = require('mongoose');
// Schema for chat of the group
const chatSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    username: String,
    text: String,
    timestamp: Date,
    likes: [{ type: mongoose.Schema.Types.ObjectId }],
    comment: [{ name: String, comment: String }]
})
module.exports = mongoose.model('chats', chatSchema);
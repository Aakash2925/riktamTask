const mongoose = require('mongoose');

// Schema for User present in a Group
 const groupSchema = new mongoose.Schema({
    admin:{type:mongoose.Schema.Types.ObjectId},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'users'}
})

module.exports = groupModel = mongoose.model('groups', groupSchema);
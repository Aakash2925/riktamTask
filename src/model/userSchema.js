const mongoose = require('mongoose');
// Schema for Users
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 25 },
    email: {
        type: String, required: true,
        match: [/.+\@.+\../, "Please enter a valid email"]
    },
    password: { type: String },
    gender: { type: String },
    admin: { type: Boolean },
    blacklistToken: { type: String },
})
module.exports = mongoose.model('Users', userSchema);

// export const userModel = mongoose.model('users',userSchema);
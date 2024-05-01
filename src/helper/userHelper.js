const mongoose = require('mongoose');
const userModel = require('../model/userSchema.js');
const { ObjectId } = require('mongodb');


const register=async (name, email, password, gender, admin, blacklisttoken)=> {
    try {
        const newUser = new userModel({ name: name, email: email, password: password, gender: gender, admin: admin, blacklistToken: blacklisttoken });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        console.log(err);
        if (err instanceof mongoose.Error.ValidationError) {
            throw err;
        }
        else {
            throw new ApplicationError("Something went wrong in signup database", 500);
        }
    }
}


const findByEmail=async (email) =>{
    try {
        return await userModel.findOne({ email });
    } catch (err) {
        console.log(err);
        // throw new ApplicationError("Something went wrong in signup database",500);
    }
}

const setToken=async (id, token)=> {
    try {
        const user = await userModel.findOneAndUpdate({ _id: new ObjectId(id) }, { blacklistToken: token });
        const savedToken = await user.save();
        return savedToken;

    } catch (err) {
        console.log(err);
    }
}
const updateDetails=async (userID, name, email, hashedpswd, gender, admin)=> {
    try {
        const user = await userModel.findById(userID);
        console.log(email);
        if (user) {
            if (name != undefined) user.name = name;
            if (email != undefined) user.email = email;
            if (hashedpswd != undefined) user.password = hashedpswd;
            if (gender != undefined) user.gender = gender;
            if (admin != undefined) user.admin = admin;
            const updatedUser = await user.save();
            return updatedUser;
        } else {
            return ' User Not found ';
        }
    } catch (err) {
        console.log(err);
    }
}


module.exports ={
    register,
    findByEmail,
    setToken,
    updateDetails,
};
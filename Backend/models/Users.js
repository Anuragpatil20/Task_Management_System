const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    status:String,
    date: { type: Date, default: Date.now } 
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel
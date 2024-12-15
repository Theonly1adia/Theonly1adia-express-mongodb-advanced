const mongoose = require("mongoose");

const UserSchema =  mongoose.Schema({
    name:{type: String},
    email:{type: String},
    age:{type: Number},
    isActive:{type:Boolean},
});

/* UserSchema.pre('save', async (next) =>{
    const salt = await bcrypt.genSalt(10);
    const plainTextPassword = this.password;
    const encryptedPassword= await bcrypt.hash(plainTextPassword, salt);
    this.password = encryptedPassword;
    next();
}) */

const User = mongoose.model("User", UserSchema);
module.exports = User
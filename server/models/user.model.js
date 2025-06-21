import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema= mongoose.Schema({
    name:{
        type: String,
        required:[true,"Users full name is required"]
    },
    email:{
        type:String,
        required:[true,"Users email address is required"],
        unique:[true,"Users password is required"]
    },
    password:{
        type:String,
        required:[true,"Users password is required"]
    },
    isAdmin:{
        type:Boolean,
        required:[true,"Users admin is required"],
        default:false,
    }
    },
    {
      //options object
        timestamps:true,
        //collections are in array
        Collection: 'users',
    }
);


userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
});



const UserModel=mongoose.model('UserModel',userSchema);

export default UserModel;
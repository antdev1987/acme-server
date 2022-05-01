import mongoose from 'mongoose'
const {Schema} = mongoose

const userSchema = new Schema({

    userName:{
        type:String,
        //unique:true
    },
    name:{
        type:String,
    },
    password:{
        type:String,
        //required:true
    },
    role:{
        type:String,
        default:'user'
    }
    
})

const User = mongoose.model('User',userSchema)
export default User
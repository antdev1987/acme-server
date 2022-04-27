import mongoose from 'mongoose'


const conectDb = ()=>(
    mongoose.connect(process.env.MONGO_URI)
)

export default conectDb
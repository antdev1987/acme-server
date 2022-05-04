import mongoose from 'mongoose'
const {Schema} = mongoose

const extraInfoSchema = new Schema({
    fechaHoraInfo:{type:String},
    diasFestivos:{type:String},

})

// extraInfoSchema.virtual('casopers',{
//     ref:'Caso',
//     localField:'nCaso',
//     foreignField:'N° CASO',
//     justOne:true
// })

const ExtraInfo = mongoose.model('ExtraInfo',extraInfoSchema)
export default ExtraInfo
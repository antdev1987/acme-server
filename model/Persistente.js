import mongoose from 'mongoose'
const {Schema} = mongoose

const persistenteSchema = new Schema({
    nCaso:{type:String},
    observacionFecha:{type:String},
    plazoEntrega:{type:String},
    utm:{type:String},
    cantidadDesgloze:{type:String},
    art12:{type:String},
    fechaOrdenCompra:{type:Date},
    fechaEntrega:{type:Date},
    diasFestivos:{type:String}
})

// persistenteSchema.virtual('casopers',{
//     ref:'Caso',
//     localField:'nCaso',
//     foreignField:'N° CASO',
//     justOne:true
// })

const Persistente = mongoose.model('Persistente',persistenteSchema)
export default Persistente
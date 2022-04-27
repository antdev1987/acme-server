import mongoose from 'mongoose'
const {Schema} = mongoose

const accionSchema = new Schema({
    
})

const Accion = mongoose.model('Accion',accionSchema)
export default Accion
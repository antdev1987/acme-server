 import mongoose from 'mongoose'
import Accion from './Accion.js'
const {Schema} = mongoose

const casoSchema = new Schema({
    NOMBRE:{
        type:String,
    },
    RESPONSABLE: {
        type:String
    },
    ID_CASOS:{
        trype:String
    },

    acciones:[Object]
  
})


const Caso = mongoose.model('Caso',casoSchema)
export default Caso 
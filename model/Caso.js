 import mongoose from 'mongoose'

const {Schema} = mongoose

const casoSchema = new Schema({
    ANEXOS:{
        type:String
    },
    AÑO:{
        type:String
    },
    CANTIDAD:{
        type:String
    },
    CONTRALORIA:{
        type:String
    },
    'DOE LLEGADA':{
        type:String
    },
    ESTADO:{type:String},
    ID:{type:String},
    ID_CASOS:{
        trype:String
    },
    'ITEM PRESUPUESTARIO':{type:String},
    'LLEGADA A COMPRAS':{type:Date},
    MONEDA:{type:String},
    'NATURALEZA FONDOS':{type:String},
    NOMBRE:{
        type:String,
    },
    'N° CASO':{type:String},
    'N° DOE A CONTRATOS':{type:String},
    PAC:{type:String},
    RESOLUCION:{type:String},
    RESPONSABLE: {
        type:String
    },
    SUBESTADO:{type:String},
    'TIPO LICITACION':{type:String},
    'UNIDAD REQUIRENTE':{type:String},
    acciones:[Object]
  
},{toObject:{virtuals:true}})

casoSchema.virtual('perscaso',{
    ref:'Persistente',
    localField:'N° CASO',
    foreignField:'nCaso',
    justOne:true
})


const Caso = mongoose.model('Caso',casoSchema)
export default Caso 
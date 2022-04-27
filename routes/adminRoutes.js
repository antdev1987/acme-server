import express from 'express'
const router = express.Router()

import Caso from '../model/Caso.js'
import Accion from '../model/Accion.js'

import {
    agregarBd,
    verBd,
  
} from '../controllers/adminControllers.js'


router.get('/bd',verBd)
router.post('/bd/add',agregarBd)


router.post('/mantencion/add/:id',async(req,res)=>{

    console.log(req.body)
   console.log(req.params)

   

    try {

        const isCaso = await Caso.findById(req.params.id)

        if(!isCaso){
            return res.json({msg:'not found'})
        }

        isCaso.NOMBREpersonalizado = req.body.NOMBREpersonalizado || ''

        await isCaso.save()
       
        res.json({msg:'done'})

    } catch (error) {
        console.log(error)
    }


})


router.delete('/mantencion/remove',async(req,res)=>{

  console.log('aqui')

    
    const isCasoDeleted = await Caso.find().limit(1)
    const isAccionDeleted = await Accion.find().limit(1)

    if(isCasoDeleted.length <=0){
        console.log('aqui en el condicional')
        return res.json({msg:'collection already deleted'})
    }

    // if(isAccionDeleted.length <=0){
    //     console.log('aqui en el condicional')
    //     return res.json({msg:'collection already deleted'})
    // }
  

    try {

        await Caso.collection.drop()
        await Accion.collection.drop()

        console.log('remove done')
        res.json({msg:'data base Caso and Accion deleted'})

    } catch (error) {
        console.log(error)
    }


})


export default router
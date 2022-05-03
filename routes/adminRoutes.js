import express from 'express'
const router = express.Router()
import Caso from '../model/Caso.js'

import checkAuth from '../middleware/checkAuth.js'

import {
    agregarBd,
    verBd,
    removeBd,
    crearUsuario,
    eliminarUsuario,
    verUsuarios,
    mantencionAdd,
    mantencionVer
} from '../controllers/adminControllers.js'


router.get('/bd',checkAuth, verBd)
router.post('/bd/add',checkAuth, agregarBd)
router.delete('/bd/remove',checkAuth, removeBd)

router.get('/user',verUsuarios)
router.post('/user/add',crearUsuario)
router.delete('/user/remove/:id',eliminarUsuario)

router.post('/mantencion/add',mantencionAdd)
router.get('/mantencion/ver',mantencionVer)


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




export default router
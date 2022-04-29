import Caso from "../model/Caso.js";

const agregarBd = async (req, res) => {
  try {
    const caso = await Caso.create(req.body);
    //await Accion.collection.insertMany(req.body.db2);

    console.log("done");
    res.json(caso);
  } catch (error) {
    console.log(error);
  }
};

//consultar base de datos
const verBd = async (req, res) => {
 console.log('consultando la base de datos')
  try {
    const caso = await Caso.find()
    console.log('done')
    res.json(caso);
  } catch (error) {
    console.log(error);
  }
};

//eliminar base de datos
const removeBd = async(req,res)=>{
  console.log('aqui')

    
  const isCasoDeleted = await Caso.find().limit(1)
  

  if(isCasoDeleted.length <=0){
      console.log('aqui en el condicional')
      return res.json({msg:'collection already deleted'})
  }

  try {

      await Caso.collection.drop()
     // await Accion.collection.drop()

      console.log('remove done')
      res.json({msg:'data base Caso and Accion deleted'})

  } catch (error) {
      console.log(error)
  }

}

export { agregarBd, verBd,removeBd };

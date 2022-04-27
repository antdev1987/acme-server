import Caso from "../model/Caso.js";
import Accion from "../model/Accion.js";

const agregarBd = async (req, res) => {
  try {
    await Caso.create(req.body);
    //await Accion.collection.insertMany(req.body.db2);

    console.log("done");
    res.json({ msg: "done" });
  } catch (error) {
    console.log(error);
  }
};

const verBd = async (req, res) => {

  const name = req.query.name
  const nResponsable = req.query.nResponsable

  //const NOMBRE = "ADQUISICION 2"
  
console.log(name,nResponsable)
 // console.log(idCaso)

  try {
    const caso = await Caso.find({RESPONSABLE:'DMUNOZ' });

    res.json(caso);
  } catch (error) {
    console.log(error);
  }
};

export { agregarBd, verBd };

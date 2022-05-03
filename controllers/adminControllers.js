import Caso from "../model/Caso.js";
import User from "../model/User.js";
import Persistente from "../model/Persistente.js";

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
  console.log("consultando la base de datos");
  try {
    const caso = await Caso.find();
    console.log("done");
    
    res.json(caso);
  } catch (error) {
    console.log(error);
  }
};

//eliminar base de datos
const removeBd = async (req, res) => {
  console.log("aqui");

  const isCasoDeleted = await Caso.find().limit(1);

  if (isCasoDeleted.length <= 0) {
    console.log("aqui en el condicional");
    return res.json({ msg: "collection already deleted" });
  }

  try {
    await Caso.collection.drop();
    // await Accion.collection.drop()

    console.log("remove done");
    res.json({ msg: "data base Caso and Accion deleted" });
  } catch (error) {
    console.log(error);
  }
};

//ver usuarios
const verUsuarios = async (req, res) => {
  console.log("en la api ver usuarios");
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//crear nuevo usuario
const crearUsuario = async (req, res) => {
  console.log("en api crear usuario");
  console.log(req.body);

  const isUser = await User.findOne({ userName: req.body.userName });

  if (isUser) {
    return res.status(409).json({ msg: "Usuario Ya Existe" });
  }

  try {
    const newUser = new User(req.body);

    const data = await newUser.save();

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

// eliminar usuarios
const eliminarUsuario = async (req, res) => {
  console.log("en eliminar api");

  const { id } = req.params;
  console.log(id);
  try {
    await User.deleteOne({ _id: id });

    res.json({ msg: "usuario eliminado" });
  } catch (error) {
    console.log(error);
  }
};

//anadir persistente datos en mantencion
const mantencionAdd = async (req, res) => {

  try {
    const newData = new Persistente(req.body);

    const data = await newData.save();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

//ver persistente datos llamado desde la tabla caso en mantencion
const mantencionVer = async (req, res) => {
  
  console.log('en api mantencion ver')
  try {
    const data = await Caso.findOne({'N° CASO':'110-2022'}).select('-acciones').populate('perscaso')

    
    res.json({primero:data,segundo:data.perscaso})
  } catch (error) {
    console.log(error)
  }

};

export {
  agregarBd,
  verBd,
  removeBd,
  crearUsuario,
  eliminarUsuario,
  verUsuarios,
  mantencionAdd,
  mantencionVer
};

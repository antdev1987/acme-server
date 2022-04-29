import generarJWT from "../helpers/generarJWT.js";
import User from "../model/User.js";

const login = async (req, res) => {
  const { userName, password } = req.body;

  console.log('en el login')

  try {
    const usuario = await User.findOne({ userName });
    if (!usuario) {
      return res.status(404).json({ msg: "El usuario no Existe" });
    }

    if (usuario.password !== password) {
      return res.status(403).json({ msg: "el password es incorrecto" });
    }

    res.json({
      nombre: usuario.name,
      role: usuario.role,
      token: generarJWT(usuario._id),
    });
  } catch (error) {
    console.log(error);
  }
};



export { login };

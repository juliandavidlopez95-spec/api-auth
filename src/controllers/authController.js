const User = require("../models/User");

// Registro de usuario
const register = async (req, res) => {
  const { usuario, password } = req.body;
// Establecemos variables para usuario y contraseña. 
  if (!usuario || !password) {
    return res.status(400).json({ msg: "Campos vacíos" });
  }
// Si existen el sistema nos notificara
  const exists = await User.findOne({ usuario });
  if (exists) {
    return res.status(400).json({ msg: "Usuario ya existe" });
  }
//En caso de ser un usuario nuevo lo almacenaremos en una nueva variable que nos respondera con el usuario registrado
  const user = new User({ usuario, password });
  await user.save();

  res.json({ msg: "Usuario registrado" });
};

// Login de usuario
const login = async (req, res) => {
  const { usuario, password } = req.body;
// Con las variables establecidas, establecemos que las necesitamos como requerimientos y en caso de faltar responde "Campos vacios"
  if (!usuario || !password) {
    return res.status(400).json({ msg: "Campos vacíos" });
  }
// Tambien implementamos una variable que sea encontrar al "usuario" en la cual nos da 2 respuestas en caso de error y una de login exitoso
  const user = await User.findOne({ usuario });

  if (!user) {
    return res.status(404).json({ msg: "Usuario no existe" });
  }

  if (user.password !== password) {
    return res.status(401).json({ msg: "Password incorrecto" });
  }

  res.json({ msg: "Login exitoso" });
};

module.exports = { register, login };
const mongoose = require("mongoose");
// Establecemos la variable que necesitamos mongoose para poder operar. 

//creamos un nuevo esquema el cual sera un usuario y una contraseña de tipo string, que son requeridas. 
const userSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
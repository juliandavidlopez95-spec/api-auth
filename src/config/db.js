const mongoose = require("mongoose");

//Establecemos nuestras variables conexion
const connectDB = async () => {
// Cuando se intente realizar la conexion nos debe dar 2 mensajes, o conectado o un error en la DB
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.log("Error DB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;










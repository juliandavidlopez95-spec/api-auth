require("dotenv").config();

//creamos las variables que solicita como requerimiento la coneccion a la base de datos
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

// en caso tal de ejecutarse correctamente nos mostrara "Servidor corriendo"
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo");
});
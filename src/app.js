const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
// Creamos las 3 variables necesarias, la variable de express, la variable Cross (Cross-origin resource sharing) para cargar los recursos y las rutas de autenticacion.

const app = express();


app.use(cors());
app.use(express.json());

// Establecemos un mensaje al momento de inicilizacion de nuestra API 
app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/api/auth", authRoutes);

module.exports = app;
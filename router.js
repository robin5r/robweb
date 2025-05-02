const express = require('express')//Framework
const router = express.Router() // Objeto para rutas
const conexion = require('./database/db')//conexion

/*
peticiones : request/req/entrada
Respuesta  : results/res/salida
*/
router.get('/',(req,res)=>{
  res.send("SENATI INGENIERIA DE SOFTWARE")
})

router.get('/desarrollador',(req,res)=>{
  res.send("Robinson Eduardo Vilela LLatas")
})

router.get('/carrera',(req,res)=>{
  //res.send("Ingenieria de sistema y compilacion")
  res.render("index")//plantilla
})
module.exports = router
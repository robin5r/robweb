const mysql = require('mysql')
// cadena de conexion = STRING ... "server=localhost;user=root;password=12345;database=midb"
// objetos de conexion OBJECT={KEY:VALOR}
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movietime'
})
// Activar la conexion...
conexion.connect((error)=>{
  if (error){
    console.error("Error en la conexion")
    return;//FIN
  }
  console.log('Conexión Exitosa')
})

// Exportar el objeto de conexion para oficializar su existencia
module.exports=conexion;
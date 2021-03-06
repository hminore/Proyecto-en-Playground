const path = require('path')
const express = require('express');
const app = express();


// informo que la carpeta public va a ser estatica (público)
publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath));

// Levantando el servidor para que escuche en el puerto 3000
app.listen(3000, () => console.log("Servidor corriendo en puerto 3000") );



// enviado una pagina HTML con la ruta de Root. (http://localhost:3000)
app.get ("/", function(req, res){
    res.sendFile(path.join(__dirname, './views/home.html'));
});
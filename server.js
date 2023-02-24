const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.end("Bienvenidos al servidor backend Node.js.  Corriendo")
});


app.listen(5000, function(){
    console.log("El servidor estaaaa corriendo correctamente")
})
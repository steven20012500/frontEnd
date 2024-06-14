const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.post('/api/agregarFactura', (req, res) => {
  const { ruc, valor, gasto } = req.body;

  // Formatea los datos como desees, por ejemplo, como JSON
  const datos = { ruc, valor, gasto };

  // Escribe los datos en el archivo JSON
  fs.readFile('informacion.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error en el servidor.');
    }

    let jsonData = [];
    if (data) {
      jsonData = JSON.parse(data);
    }

    jsonData.push(datos);

    fs.writeFile('informacion.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error en el servidor.');
      }
      res.send('Datos guardados correctamente.');
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});

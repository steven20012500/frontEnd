const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, 'public/assets/data/gastos.json'); // Asegúrate de que esta ruta sea correcta

app.use(bodyParser.json());
app.use(cors());

app.post('/api/agregarFactura', (req, res) => {
  const { cedula, ingreso, salud, educacion, vestimenta, vivienda, alimentacion } = req.body;
  const datos = { cedula, ingreso, salud, educacion, vestimenta, vivienda, alimentacion };

  // Intenta leer el archivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).send('Error en el servidor al leer el archivo JSON.');
    }

    let jsonData = [];
    if (data) {
      try {
        jsonData = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error al parsear el archivo JSON:', parseErr);
        return res.status(500).send('Error en el servidor al parsear el archivo JSON.');
      }
    }

    // Agrega los nuevos datos al array JSON
    jsonData.push(datos);

    // Escribe de vuelta al archivo JSON
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error('Error al escribir en el archivo JSON:', err);
        return res.status(500).send('Error en el servidor al escribir en el archivo JSON.');
      }
      // Envia una respuesta JSON de éxito
      res.json({ message: 'Datos guardados correctamente.' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});


app.get('/api/obtenerDatos', (req, res) => {
    // Ruta al archivo JSON donde se almacenan los datos
    const filePath = path.join(__dirname, 'public', 'assets', 'data', 'gastos.json');
    
    // Leer el archivo JSON y enviarlo como respuesta
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error en el servidor al leer el archivo JSON.');
      }
  
      let jsonData = [];
      if (data) {
        jsonData = JSON.parse(data);
      }
  
      res.json(jsonData);
    });
  });
  app.get('/api/facturas', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return res.status(500).send('Error en el servidor al leer el archivo JSON.');
      }
  
      let jsonData = [];
      if (data) {
        try {
          jsonData = JSON.parse(data);
        } catch (parseErr) {
          console.error('Error al parsear el archivo JSON:', parseErr);
          return res.status(500).send('Error en el servidor al parsear el archivo JSON.');
        }
      }
  
      res.json(jsonData);
    });
  });
  
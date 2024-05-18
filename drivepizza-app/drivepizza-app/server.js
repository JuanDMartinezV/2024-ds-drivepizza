import express from 'express';
import bodyParser from 'body-parser';
import PizzeriaModel from './DrivePizza-Model.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pizzeriaModel = new PizzeriaModel();
pizzeriaModel.connect();

// Endpoint para reservar una mesa
app.post('/reservar', async (req, res) => {
  const { fecha, hora } = req.body;
  try {
    const reservationId = await pizzeriaModel.saveReservation(fecha, hora);
    res.send(`Reserva realizada con éxito. ID: ${reservationId}`);
  } catch (error) {
    res.status(500).send('Error al realizar la reserva: ' + error.message);
  }
});

// Endpoint para crear un pedido
app.post('/crear-pedido', async (req, res) => {
  const { tamano, ingredientes } = req.body;
  try {
    const pedidoId = await pizzeriaModel.savePedido(tamano, ingredientes);
    res.send(`Pedido creado con éxito. ID: ${pedidoId}`);
  } catch (error) {
    res.status(500).send('Error al crear el pedido: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

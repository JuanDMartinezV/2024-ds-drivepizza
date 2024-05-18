// server.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para manejar solicitudes JSON

// Manejar la solicitud POST desde el formulario de reserva
app.post('/reservar', async (req, res) => {
  try {
    const { fecha, hora } = req.body;

    // Guardar la reserva en la base de datos
    const reserva = await prisma.reserva.create({
      data: {
        fecha,
        hora,
      },
    });

    // Redirigir a la página de reserva con la información de la reserva en la URL
    res.redirect(`/reserva.html?fecha=${reserva.fecha}&hora=${reserva.hora}`);
  } catch (error) {
    console.error('Error al guardar la reserva:', error);
    res.status(500).send('Error al guardar la reserva');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

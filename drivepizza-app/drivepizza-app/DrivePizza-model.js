const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function saveReservation(fecha, hora) {
  try {
    const reserva = await prisma.reserva.create({
      data: {
        fecha,
        hora,
      },
    });
    console.log('Reserva guardada:', reserva);
    return reserva.id;
  } catch (error) {
    throw error;
  }
}

module.exports = { saveReservation };

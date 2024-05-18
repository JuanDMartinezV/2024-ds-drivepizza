import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PizzeriaModel {
  async saveReservation(fecha, hora) {
    try {
      const reservation = await prisma.reserva.create({
        data: {
          fecha,
          hora,
        },
      });
      return reservation.id;
    } catch (error) {
      throw error;
    }
  }

  async savePedido(tamano, ingredientes) {
    try {
      const pedido = await prisma.pedido.create({
        data: {
          tamano,
          ingredientes: ingredientes.join(', '),
        },
      });
      return pedido.id;
    } catch (error) {
      throw error;
    }
  }
}

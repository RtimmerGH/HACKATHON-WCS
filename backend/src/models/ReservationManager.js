const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  findReservation(id) {
    return this.connection.query(
      `select ${this.table}.id,${this.table}.idVehicle, ${this.table}.idUser, ${this.table}.startDate, ${this.table}.endDate, vehicle.registration as registration from ${this.table} join vehicle on vehicle.id=${this.table}.idVehicle where ${this.table}.id = ?`,
      [id]
    );
  }

  findAllReservations(where) {
    return this.connection.query(
      `select ${this.table}.id,${this.table}.idVehicle, ${this.table}.idUser, ${this.table}.startDate, ${this.table}.endDate, vehicle.registration as registration from ${this.table} join vehicle on vehicle.id=${this.table}.idVehicle${where}`
    );
  }

  insert(reservation) {
    return this.connection.query(
      `insert into ${this.table} (idVehicle, idUser, startDate, endDate) values (?,?,?,?)`,
      [
        reservation.idVehicle,
        reservation.idUser,
        reservation.startDate,
        reservation.startPeriod,
        reservation.endDate,
        reservation.endPeriod,
      ]
    );
  }

  getReservationIdUser(id) {
    return this.connection.query(
      `select ${this.table}.idUser from ${this.table} where ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = ReservationManager;

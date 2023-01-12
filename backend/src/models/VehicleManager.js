const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  findVehicle(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllVehicles() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(vehicle) {
    return this.connection.query(
      `insert into ${this.table} (registration, idCategory, idType, idModel,idAgency, km, fuel, numDoor, numPassenger, color, commissioningDate, availability, image) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.registration,
        vehicle.idCategory,
        vehicle.idType,
        vehicle.idModel,
        vehicle.idAgency,
        vehicle.km,
        vehicle.fuel,
        vehicle.numDoor,
        vehicle.numPassenger,
        vehicle.color,
        vehicle.commissioningDate,
        vehicle.availability,
        vehicle.image,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `update ${this.table} set registration = ?, idCategory = ?, idType = ?, idModel = ?,idAgency = ?, km = ?, fuel = ?, numDoor = ?, numPassenger = ?, color = ?, commissioningDate = ?, availability = ?, image = ?  where id = ?`,
      [
        vehicle.registration,
        vehicle.idCategory,
        vehicle.idType,
        vehicle.idModel,
        vehicle.idAgency,
        vehicle.km,
        vehicle.fuel,
        vehicle.numDoor,
        vehicle.numPassenger,
        vehicle.color,
        vehicle.commissioningDate,
        vehicle.availability,
        vehicle.image,
        vehicle.id,
      ]
    );
  }
}

module.exports = VehicleManager;

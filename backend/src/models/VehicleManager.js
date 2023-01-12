const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  findVehicle(id) {
    return this.connection.query(
      `select ${this.table}.id,${this.table}.registration, ${this.table}.idCategory, ${this.table}.idType, ${this.table}.idModel, ${this.table}.idAgency, ${this.table}.km, ${this.table}.fuel, ${this.table}.numDoor, ${this.table}.numPassenger, ${this.table}.color, ${this.table}.commissioningDate, ${this.table}.availability, ${this.table}.image, category.name as category, type.name as type, model.name as model, agency.address as address, agency.city as city from  ${this.table} join category on category.id=${this.table}.idCategory join type on type.id=${this.table}.idType join model on model.id=${this.table}.idModel join agency on agency.id=${this.table}.idAgency join brand on brand.id=model.idbrand where ${this.table}.id = ?`,
      [id]
    );
  }

  findAllVehicles() {
    return this.connection.query(
      `select ${this.table}.id,${this.table}.registration, ${this.table}.idCategory, ${this.table}.idType, ${this.table}.idModel, ${this.table}.idAgency, ${this.table}.km, ${this.table}.fuel, ${this.table}.numDoor, ${this.table}.numPassenger, ${this.table}.color, ${this.table}.commissioningDate, ${this.table}.availability, ${this.table}.image, category.name as category, type.name as type, model.name as model, agency.address as address, agency.city as city, brand.name as brand from  ${this.table} join category on category.id=${this.table}.idCategory join type on type.id=${this.table}.idType join model on model.id=${this.table}.idModel join agency on agency.id=${this.table}.idAgency join brand on brand.id=model.idbrand`
    );
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

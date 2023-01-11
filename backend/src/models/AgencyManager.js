const AbstractManager = require("./AbstractManager");

class AgencyManager extends AbstractManager {
  constructor() {
    super({ table: "agency" });
  }

  findAgency(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllAgencies() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(agency) {
    return this.connection.query(
      `insert into ${this.table} (address, city) values (?,?)`,
      [agency.address, agency.city]
    );
  }

  update(agency) {
    return this.connection.query(
      `update ${this.table} set address = ?, city = ? where id = ?`,
      [agency.address, agency.city]
    );
  }
}

module.exports = AgencyManager;

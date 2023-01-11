const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  findBrand(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllBrands() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(brand) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [brand.name]
    );
  }

  update(brand) {
    return this.connection.query(
      `update ${this.table} set name = ?where id = ?`,
      [brand.name, brand.id]
    );
  }
}

module.exports = BrandManager;
